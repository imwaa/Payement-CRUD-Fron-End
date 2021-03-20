import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PayementDetailsComponent } from './payement-details/payement-details.component';
import { PayementDetailsFormComponent } from './payement-details/payement-details-form/payement-details-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PayementDetailsComponent,
    PayementDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
