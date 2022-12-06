import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { DxListModule, DxSchedulerModule, DxTemplateModule } from "devextreme-angular";
import { AppComponent } from "./app.component";
import { AppointmentInfo } from "./components/appointmentInfo/appointmentInfo.component";


@NgModule({
  declarations: [
    AppComponent,
    AppointmentInfo
  ],
  imports: [
    BrowserModule,
    DxSchedulerModule,
    DxTemplateModule,
    DxListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
