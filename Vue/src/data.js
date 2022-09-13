export const data = [
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

const employees = [{
  text: 'John Heart',
  id: 1,
  color: '#56ca85',
}, {
  text: 'Sandra Johnson',
  id: 2,
  color: '#ff9747',
}];

export const resources = [
  {
    fieldExpr: 'employeeID',
    allowMultiple: false,
    dataSource: employees,
    label: 'Employee',
  }
]