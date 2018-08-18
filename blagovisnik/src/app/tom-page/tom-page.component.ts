import { Component, OnInit } from '@angular/core';
import { TomsService } from '../shared/services/toms.service';
import {Tom} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tom-page',
  templateUrl: './tom-page.component.html',
  styleUrls: ['./tom-page.component.css']
})
export class TomPageComponent implements OnInit {

  toms: Tom[] = [];
  oSub: Subscription;

  constructor(private tomsService: TomsService) { }

  ngOnInit() {
    this.fetch();
  }

  private fetch() {
      this.oSub = this.tomsService.fetch().subscribe(
          toms => {
              this.toms = toms;
          });
  }
}
