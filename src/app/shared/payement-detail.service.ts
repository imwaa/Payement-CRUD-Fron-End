import { Injectable } from '@angular/core';
import { PayementDetail } from './payement-detail.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PayementDetailService {

  constructor(private http: HttpClient) { }

  formData: PayementDetail = new PayementDetail();
  readonly baseURL = 'http://localhost:52184/api/PayementDetail'

  postPayementDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
}
