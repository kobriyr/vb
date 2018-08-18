import {Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Article} from '../../interfaces';
import {ArticleService} from '../../services/article.service';
import {MaterializeService} from '../../classes/materialize.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  query = '';
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getAll()
      .subscribe(
        (res) => {
            this.articles = res;
        },
        err => MaterializeService.toast(err.error.message)
      );

    const submitIcon = $('.sb-icon-search');
    const submitInput = $('.sb-search-input');
    const searchBox = $('.sb-search');
    const menuUl = $('.main-menu');
    const list = $('.wrap-search');
    const main = $('.text-info');
    let isOpen = false;

      $(document).mouseup(function() {
        if (isOpen) {
          submitInput.val('');
          $('.sb-search-submit').css('z-index', '-999');
          submitIcon.click();
        }
      });

      submitIcon.mouseup(function() {
        return false;
      });

      searchBox.mouseup(function() {
        return false;
      });

      submitIcon.click(function() {
        if (!isOpen) {
          searchBox.addClass('sb-search-open');
          menuUl.hide();
          main.hide();
          list.show();
          isOpen = true;
        } else {
          searchBox.removeClass('sb-search-open');
          menuUl.show();
          main.show();
          list.hide();
          isOpen = false;
        }
      });
  }
}
