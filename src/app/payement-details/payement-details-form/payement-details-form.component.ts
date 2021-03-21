import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PayementDetail } from 'src/app/shared/payement-detail.model';
import { PayementDetailService } from 'src/app/shared/payement-detail.service';

@Component({
  selector: 'app-payement-details-form',
  templateUrl: './payement-details-form.component.html',
  styles: [
  ]
})
export class PayementDetailsFormComponent implements OnInit {

  constructor(public service: PayementDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postPayementDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted successfully", "Payement Detail Registered");
      },
      err => { console.log(err); });
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PayementDetail();
  }

}
