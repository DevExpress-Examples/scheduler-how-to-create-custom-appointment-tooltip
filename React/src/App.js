import React, {useCallback, useState} from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import Scheduler from 'devextreme-react/scheduler';
import List from 'devextreme-react/list';

import AppointmentsInfo from './components/AppointmentsInfo';
import {data, resources} from './data';
import {formatDate} from './utils';

const App = () => {
    const [tooltipItems, setTooltipItems] = useState([])
    const currentDate = new Date(2021, 5, 2);

    const onAppointmentTooltipShowing = useCallback((e) => {
        e.cancel = true;
        const {appointments} = e;
        const res = appointments.map((item, index) => {
            return {
                id: index,
                text: item.appointmentData.text,
                colorDef: item.color,
                startDate: formatDate(item.appointmentData.startDate),
                endDate: formatDate(item.appointmentData.endDate),
            }
        });
        setTooltipItems(res);
    }, []);

    return (
        <div className='container'>
            <List
                width='33%'
                dataSource={tooltipItems}
                itemComponent={AppointmentsInfo}
            />
            <Scheduler
                dataSource={data}
                currentView='week'
                currentDate={currentDate}
                firstDayOfWeek={1}
                startDayHour={15}
                endDayHour={20}
                showAllDayPanel={false}
                height={600}
                width='66%'
                resources={resources}
                onAppointmentTooltipShowing={onAppointmentTooltipShowing}
            >
            </Scheduler>
        </div>
    )
}

export default App;