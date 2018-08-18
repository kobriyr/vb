import { Component, OnInit } from '@angular/core';
import { Tom } from '../../shared/interfaces';
import {of} from 'rxjs';
import {TomsService} from '../../shared/services/toms.service';
import {MaterializeService} from '../../shared/classes/materialize.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {ArticleService} from '../../shared/services/article.service';

@Component({
  selector: 'app-show-tom-page',
  templateUrl: './show-tom-page.component.html',
  styleUrls: ['./show-tom-page.component.css']
})
export class ShowTomPageComponent implements OnInit {

  tom: Tom;

  constructor(private tomsService: TomsService,
              private router: ActivatedRoute,
              private articleService: ArticleService,
              private route: Router) {}

  ngOnInit() {
      this.fetch();
  }

  private fetch() {
      this.router.params
          .pipe(
              switchMap((params: Params) => {
                  if (params['id']) {
                      return this.tomsService.getById(params['id']);
                  }

                  return of(null);
              })
          )
          .subscribe(tom => {
              if (tom) {
                  this.tom = tom;
              }

          }, error => {
              MaterializeService.toast(error.error.message);
          });
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

  deleteArticle(id) {
    const desicion = window.confirm('Ви впевнені що хочите видалити статтю ?');
    if (desicion) {
      this.articleService.delete(id)
        .subscribe(
          () => MaterializeService.toast('Статтю успішно видалено!'),
          err => MaterializeService.toast(err.error.message),
      () => window.location.reload()
        );
    }
  }
}
