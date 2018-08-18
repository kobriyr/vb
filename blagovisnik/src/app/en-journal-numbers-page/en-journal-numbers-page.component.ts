import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterializeService} from '../shared/classes/materialize.service';
import {Tom} from '../shared/interfaces';
import {TomsService} from '../shared/services/toms.service';
import {ArticleService} from '../shared/services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-en-journal-numbers-page',
  templateUrl: './en-journal-numbers-page.component.html',
  styleUrls: ['./en-journal-numbers-page.component.css']
})
export class EnJournalNumbersPageComponent implements OnInit, AfterViewInit {

  @ViewChild('collapsible') collapsibleRef: ElementRef;

  toms: Tom[];

  constructor( private tomsService: TomsService,
               private articleServise: ArticleService,
               private route: Router) { }

  ngOnInit() {
    this.tomsService.getAll()
      .subscribe(
        (res) => {
          this.toms = res;
        },
        err => MaterializeService.toast(err.error.message)
      );
  }

  ngAfterViewInit () {
    MaterializeService.collapsible(this.collapsibleRef, {inDuration: 1000, outDuration: 1000});
  }
}
