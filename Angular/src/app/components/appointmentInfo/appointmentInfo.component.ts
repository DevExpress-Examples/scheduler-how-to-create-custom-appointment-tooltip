import {Component, Input} from "@angular/core";
import {TooltipItem} from "../../app.service";

@Component({
  selector: 'appointment-info',
  templateUrl: 'appointmentInfo.component.html',
  styleUrls: ['appointmentInfo.component.css'],
})

export class AppointmentInfo {
  @Input() data: TooltipItem;

  color: string;

  ngOnInit() {
    this.data.colorDef.done((color: string) => this.color = color);
  }
}
