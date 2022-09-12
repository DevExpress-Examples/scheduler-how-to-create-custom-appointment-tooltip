$(function () {
    const list = $("#list").dxList({
        width: '33%',
        dataSource: [],
        itemTemplate(data) {
            const {text, colorDef, startDate, endDate} = data;
            const result = $('<div>').css({display: 'flex', alignItems: 'baseline'});
            const marker = $('<div>').css({width: '10px', height: '10px', marginRight: '10px', borderRadius: '50%'}).appendTo(result);
            const content = $('<div>').appendTo(result)
            colorDef.done(color => marker.css({background: color}));
            $('<p>').text(text).appendTo(content);
            $('<p>').text(`${startDate} - ${endDate}`).appendTo(content);

            return result;
        },
    }).dxList('instance');

    $('#scheduler').dxScheduler({
        dataSource: data,
        currentView: 'week',
        currentDate: new Date(2021, 5, 2),
        firstDayOfWeek: 1,
        startDayHour: 15,
        endDayHour: 20,
        showAllDayPanel: false,
        width: '66%',
        resources: [
            {
                fieldExpr: 'employeeID',
                allowMultiple: false,
                dataSource: employees,
                label: 'Employee',
            },
        ],
        onAppointmentTooltipShowing(e) {
            e.cancel = true;
            const {appointments} = e;
            list.option('dataSource', appointments.map((it) => ({
                text: it.appointmentData.text,
                colorDef: it.color,
                startDate: formatDate(it.appointmentData.startDate),
                endDate: formatDate(it.appointmentData.endDate),
            })))

        },
    });

});

const formatDate = (date) => {
    return `${date.getHours()}:${date.getMinutes()}`
}

const employees = [{
    text: 'John Heart',
    id: 1,
    color: '#56ca85',
}, {
    text: 'Sandra Johnson',
    id: 2,
    color: '#ff9747',
}];

const data = [
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