import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TripService } from '../services/trip.service';
import { UserService } from '../services/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { GridDetailsComponent } from './grid-details/grid-details.component';
interface tripsList { _id?: number }


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  trips: tripsList = {};
  users: any = {};
  openTripInfoModal: BsModalRef;
  key = '';
  reverse = false;
  constructor(
    private spinner: NgxSpinnerService,
    private tripService: TripService,
    private userService: UserService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getTripDetails();
    this.getUserDetails();
  }
  getTripDetails() {
    this.spinner.show()
    this.tripService.getTrips().subscribe(
      res => {
        console.log(res)
        if (res) {
          this.trips = res;
          this.spinner.hide();
        }
      }
    )
  }
  getUserDetails() {
    this.spinner.show()
    this.userService.getUsers().subscribe(
      res => {
        console.log(res)
        if (res) {
          this.users = res;
          this.spinner.hide();
        }
      }
    )
  }
  openInfoModal(trip) {
    this.openTripInfoModal = this.modalService.show(GridDetailsComponent, { initialState: { trip: trip }, class: 'modal-md' })
    this.openTripInfoModal.content.onClose = (res) => {
      if (res.Success) {
        console.log("Succeeded" + res);
      } else {
        console.error("Error Happened" + res);
      }
      this.openTripInfoModal.hide();
    }
  }
  sortList(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
