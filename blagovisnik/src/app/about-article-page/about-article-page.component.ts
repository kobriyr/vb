import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/interfaces';
import {switchMap} from '../../../node_modules/rxjs/internal/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {of} from 'rxjs';
import {ArticleService} from '../shared/services/article.service';
import {MaterializeService} from '../shared/classes/materialize.service';

@Component({
  selector: 'app-about-article-page',
  templateUrl: './about-article-page.component.html',
  styleUrls: ['./about-article-page.component.css']
})
export class AboutArticlePageComponent implements OnInit {

  article: Article;
  docName;

  constructor(private router: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.router.params
      .pipe(
        switchMap((params: Params) => {
          if (params['id']) {
            return this.articleService.getById(params['id']);
          }

          return of(null);
        })
      )
      .subscribe(article => {
        if (article) {
          this.article = article;
          this.docName = article.document.substr(11);
        }
      }, error => {
        MaterializeService.toast(error.error.message);
      });
  }

}
