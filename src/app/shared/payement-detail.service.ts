import { Injectable } from '@angular/core';
import { PayementDetail } from './payement-detail.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PayementDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:52184/api/PayementDetail'

  formData: PayementDetail = new PayementDetail();
  list: PayementDetail[];

  postPayementDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putPayementDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.payementDetailId}`, this.formData)
  }

  refreshList() {
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as PayementDetail[]);
  }

  deletePayementDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
