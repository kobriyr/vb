import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterializeService} from '../shared/classes/materialize.service';

@Component({
  selector: 'app-journal-numbers-page',
  templateUrl: './journal-numbers-page.component.html',
  styleUrls: ['./journal-numbers-page.component.css']
})
export class JournalNumbersPageComponent implements OnInit, AfterViewInit {

  @ViewChild('collapsible') collapsibleRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit () {
    MaterializeService.collapsible(this.collapsibleRef, {inDuration: 1000, outDuration: 1000});
  }

}
