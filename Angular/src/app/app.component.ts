import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxListModule, DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import {
  Appointment,
  AppointmentTooltipShowingAppointmentInfo,
  AppointmentTooltipShowingEvent
} from 'devextreme/ui/scheduler';
import { employees, data } from './data';
import { AppointmentInfo } from './components/appointmentInfo/appointmentInfo.component';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  dataSource = data;
  currentDate: Date = new Date(2021, 5, 2);
  resourcesDataSource = employees;
  tooltipItems: Appointment[] = [];

  onAppointmentTooltipShowing(e: AppointmentTooltipShowingEvent) {
    e.cancel = true;
    const {appointments} = e;
    const res = appointments.map((item: AppointmentTooltipShowingAppointmentInfo) => {

      return {
        text: item.appointmentData.text,
        colorDef: item.color,
        startDate: this.formatDate(item.appointmentData.startDate as Date),
        endDate: this.formatDate(item.appointmentData.endDate as Date),
      }
    });

    this.tooltipItems = res;
  }

  private formatDate(date: Date) {
    return `${date.getHours()}:${date.getMinutes()}`
  }
}

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

platformBrowserDynamic().bootstrapModule(AppModule);
