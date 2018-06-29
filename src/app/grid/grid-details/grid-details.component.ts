import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UserService } from '../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.css']
})
export class GridDetailsComponent implements OnInit {
  trip: any = {};
  onClose: any;
  userDetails: any = {};

  constructor(
    public openTripInfoModal: BsModalRef,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private saveModal: BsModalRef
  ) { }

  ngOnInit() {
    this.getById();
    console.log(this.trip.userId);
  }
  getById() {
    this.spinner.show()
    this.userService.getUserById(this.trip.userId).subscribe(
      res => {
        console.log(res)
        if (res) {
          this.userDetails = res;
          this.spinner.hide();
        }
      }
    )
  }

}
