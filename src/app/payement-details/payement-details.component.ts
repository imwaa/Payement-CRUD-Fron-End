import { Component, OnInit } from '@angular/core';
import { PayementDetail } from '../shared/payement-detail.model';
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

  populateForm(selectedRecord: PayementDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
