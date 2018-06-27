import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css']
})
export class GridDetailsComponent implements OnInit {
  trip: any = {};
  onClose: any;

  constructor(
    public openTripInfoModal: BsModalRef,
  ) { }

  ngOnInit() {
  }

}
