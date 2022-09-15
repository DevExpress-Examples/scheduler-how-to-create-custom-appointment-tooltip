import {Component, Input} from "@angular/core";
import {Appointment} from "devextreme/ui/scheduler";

@Component({
  selector: 'appointment-info',
  templateUrl: 'appointmentInfo.component.html',
  styleUrls: ['appointmentInfo.component.css'],
})

export class AppointmentInfo {
  @Input() data: Appointment;

  color: string;

  ngOnInit() {
    this.data['colorDef'].done((color: string) => this.color = color);
  }
}
