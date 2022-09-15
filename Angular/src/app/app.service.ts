import { Injectable } from '@angular/core';

export class Employee {
  text: string;

  id: number;

  color: string;
}

export class Data {
  text: string;

  employeeID: number;

  startDate: Date;

  endDate: Date;
}

export class TooltipItem {
  text: string;

  colorDef: any;

  startDate: string;

  endDate: string;
}

const employees: Employee[] = [{
  text: 'John Heart',
  id: 1,
  color: '#56ca85',
}, {
  text: 'Sandra Johnson',
  id: 2,
  color: '#ff9747',
}];

const data: Data[] = [
  {
    text: 'Prepare 2021 Financial',
    employeeID: 2,
    startDate: new Date('2021-06-01T16:30:00.000'),
    endDate: new Date('2021-06-01T17:30:00.000'),
  }, {
    text: 'Prepare 2021 Marketing Plan',
    employeeID: 1,
    startDate: new Date('2021-06-01T16:30:00.000'),
    endDate: new Date('2021-06-01T17:30:00.000'),
  }, {
    text: 'Update Personnel Files',
    employeeID: 1,
    startDate: new Date('2021-06-01T16:30:00.000'),
    endDate: new Date('2021-06-01T18:30:00.000'),
  }, {
    text: 'Review Health Insurance Options',
    employeeID: 2,
    startDate: new Date('2021-06-01T16:30:00.000'),
    endDate: new Date('2021-06-01T18:30:00.000'),
  }, {
    text: 'New Brochures',
    employeeID: 1,
    startDate: new Date('2021-06-01T16:30:00.000'),
    endDate: new Date('2021-06-01T18:30:00.000'),
  }, {
    text: '2021 Brochure Designs',
    employeeID: 2,
    startDate: new Date('2021-06-01T16:30:00.000'),
    endDate: new Date('2021-06-01T18:30:00.000'),
  },
];

const tooltipItems: TooltipItem[] = [];

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }

  getData() {
    return data;
  }

  getTooltipItems() {
    return tooltipItems;
  }
}
