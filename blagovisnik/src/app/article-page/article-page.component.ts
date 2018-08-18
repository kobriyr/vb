import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../shared/interfaces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ArticleService} from '../shared/services/article.service';
import {switchMap} from '../../../node_modules/rxjs/internal/operators';
import {of} from 'rxjs';
import {MaterializeService} from '../shared/classes/materialize.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  @ViewChild('textArea') textAreaRef: ElementRef;
  @ViewChild('textAreaEn') textAreaEnRef: ElementRef;
  @ViewChild('inputFile') inputFileRef: ElementRef;

  form: FormGroup;
  file: File;
  isNew = true;
  article: Article;
  tom = null;
  validFile = false;

  constructor(private router: ActivatedRoute,
              private articleService: ArticleService,
              private route: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      author: new FormControl(null),
      number: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      pages: new FormControl(null),
      key_words: new FormControl(null),
      summary: new FormControl(null),
      summary_en: new FormControl(null),
      file: new FormControl(null)
    });

    this.form.disable();
    this.router.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            this.isNew = false;

            return this.articleService.getById(params['id']);
          }

          if (params['tom']) {
            this.tom = params['tom'];
          }

          return of(null);
        })
      )
      .subscribe(article => {
        if (article) {
          this.article = article;
          this.form.patchValue({
            author: article.author,
            number: article.number,
            title: article.title,
            pages: article.pages,
            key_words: article.key_words,
            summary: article.summary,
            summary_en: article.summary_en,
            file: article.document
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
      obs$ = this.articleService.create(this.tom, this.form.value.author, this.form.value.number,
        this.form.value.title, this.form.value.pages, this.form.value.key_words,
        this.form.value.summary, this.form.value.summary_en, this.file);
    } else {
      obs$ = this.articleService.update(this.article.id, this.form.value.author, this.form.value.number,
        this.form.value.title, this.form.value.pages, this.form.value.key_words,
        this.form.value.summary, this.form.value.summary_en, this.file);
    }

    obs$.subscribe(
      article => {
        this.article = article;
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

    if (file.size > 25 * 1024 * 1024) {
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

  deleteArticle() {
    const desicion = window.confirm('Ви впевнені що хочите видалити статтю ?');

    if (desicion) {
      this.articleService.delete(this.article.id)
        .subscribe(
          () => MaterializeService.toast('Статтю успішно видалено!'),
          err => MaterializeService.toast(err.error.message),
          () => this.route.navigate([`/admin/tom/${ this.tom }`])
        );
    }
  }
}
