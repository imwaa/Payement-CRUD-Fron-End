import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PayementDetail } from '../shared/payement-detail.model';
import { PayementDetailService } from '../shared/payement-detail.service';

@Component({
  selector: 'app-payement-details',
  templateUrl: './payement-details.component.html',
  styles: [
  ]
})
export class PayementDetailsComponent implements OnInit {

  constructor(public service: PayementDetailService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PayementDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete?")) {
      this.service.deletePayementDetail(id).subscribe(
        res => {
          this.service.refreshList();
          this.toast.error("Deleted Successfully", "Payement detail register");
        },
        err => { console.log(err) })
    }
  }
}
