import { Injectable } from '@angular/core';
import { PayementDetail } from './payement-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PayementDetailService {

  constructor() { }

  formData: PayementDetail = new PayementDetail();
}
