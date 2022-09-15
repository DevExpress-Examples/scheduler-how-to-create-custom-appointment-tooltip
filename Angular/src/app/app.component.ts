import {NgModule, Component, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxListModule, DxSchedulerModule, DxTemplateModule} from 'devextreme-angular';
import {Service, Employee, TooltipItem} from './app.service';
import {AppointmentInfo} from "./components/appointmentInfo/appointmentInfo.component";

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [Service],
})
export class AppComponent {
  dataSource: any;

  currentDate: Date = new Date(2021, 5, 2);

  resourcesDataSource: Employee[];

  tooltipItems: TooltipItem[];

  constructor(service: Service) {
    this.dataSource = service.getData();

    this.resourcesDataSource = service.getEmployees();

    this.tooltipItems = service.getTooltipItems();
  }

  onAppointmentTooltipShowing(e: any) {
    e.cancel = true;
    const {appointments} = e;
    const res = appointments.map((item: any) => {

      return {
        text: item.appointmentData.text,
        colorDef: item.color,
        startDate: this.formatDate(item.appointmentData.startDate),
        endDate: this.formatDate(item.appointmentData.endDate),
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
  providers: [TooltipItem],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
