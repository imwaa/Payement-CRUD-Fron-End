import { Component, OnInit } from '@angular/core';
import { PayementDetailService } from '../shared/payement-detail.service';

@Component({
  selector: 'app-payement-details',
  templateUrl: './payement-details.component.html',
  styles: [
  ]
})
export class PayementDetailsComponent implements OnInit {

  constructor(public service: PayementDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
