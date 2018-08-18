import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Tom} from '../../shared/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TomsService} from '../../shared/services/toms.service';
import {switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {MaterializeService} from '../../shared/classes/materialize.service';

@Component({
  selector: 'app-form-tom-page',
  templateUrl: './form-tom-page.component.html',
  styleUrls: ['./form-tom-page.component.css']
})
export class FormTomPageComponent implements OnInit {

    @ViewChild('textArea') textAreaRef: ElementRef;
    @ViewChild('inputFile') inputFileRef: ElementRef;

    form: FormGroup;
    file: File;
    isNew = true;
    tom: Tom;
    validFile = false;

    constructor(private router: ActivatedRoute,
                private tomsService: TomsService,
                private route: Router) { }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            number: new FormControl(null, Validators.required),
            year: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            file: new FormControl(null)
        });

        this.form.disable();

        this.router.params
            .pipe(
                switchMap((params: Params) => {
                    if (params['id']) {
                        this.isNew = false;
                        return this.tomsService.getById(params['id']);
                    }

                    return of(null);
                })
            )
            .subscribe(tom => {
                if (tom) {
                    this.tom = tom;
                    this.form.patchValue({
                        name: tom.name,
                        number: tom.number,
                        description: tom.description,
                        year: tom.year,
                        file: tom.document
                    });

                    MaterializeService.updateTextInputs();
                    MaterializeService.textareaAuto(this.textAreaRef);
                }

                this.form.enable();
            }, error => {
                MaterializeService.toast(error.error.message);
            });
    }

    onSubmit() {
        let obs$;

        this.form.disable();

        if (this.isNew) {
            obs$ = this.tomsService.create(this.form.value.name, this.form.value.number,
                this.form.value.year, this.form.value.description, this.file);
        } else {
            obs$ = this.tomsService.update(this.tom.id, this.form.value.name, this.form.value.number,
                this.form.value.year, this.form.value.description, this.file);
        }

        obs$.subscribe(
            tom => {
                this.tom = tom;
                MaterializeService.toast('Зміни збережені.');
                this.form.enable();
            }, error => {
                MaterializeService.toast(error.error.message);
                this.form.enable();
            }
        );
    }

    onFileUpload(event: any)  {
        const file = event.target.files[0];

        if (file.size > 35 * 1024 * 1024) {
            MaterializeService.toast('Розмір файлу перевищує 25 Mb. Виберіть інший файл.');
            this.validFile = true;
        } else {
            if (file.type === 'application/pdf') {
                const filetypes = /pdf|doc|docx|xls|xlsx|wps/;

                if (filetypes.test(file.name.split('.')[1].toLowerCase())) {
                    this.validFile = false;
                    this.file = file;
                } else {
                    MaterializeService.toast('Тип файлу не pdf. Завантежте інший файл.');
                }
            } else {
                MaterializeService.toast('Завантажте файл в pdf форматі.');
                this.validFile = true;
            }
        }
    }

    deleteTom() {
        const desicion = window.confirm('Ви впевнені що хочите видалити ' + this.tom.name + ' ' + this.tom.number);

        if (desicion) {
            this.tomsService.delete(this.tom.id)
                .subscribe(
                    res => MaterializeService.toast(res.message),
                    err => MaterializeService.toast(err.error.message),
                    () => this.route.navigate(['/admin'])
                );
        }
    }

}
