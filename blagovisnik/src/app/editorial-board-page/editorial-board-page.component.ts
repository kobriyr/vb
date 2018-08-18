import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterializeService} from '../shared/classes/materialize.service';

@Component({
  selector: 'app-editorial-board-page',
  templateUrl: './editorial-board-page.component.html',
  styleUrls: ['./editorial-board-page.component.css']
})
export class EditorialBoardPageComponent implements OnInit, AfterViewInit {

  @ViewChild('collapse') collapsibleRef: ElementRef;

  constructor() { };

  ngOnInit() {
  }

    ngAfterViewInit () {
        MaterializeService.collapsible(this.collapsibleRef, {inDuration: 1000, outDuration: 1000});
    }
}
