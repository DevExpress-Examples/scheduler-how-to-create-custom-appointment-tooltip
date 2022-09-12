import React, {useState} from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import Scheduler from 'devextreme-react/scheduler';
import List from 'devextreme-react/list';

import AppointmentsInfo from './AppointmentsInfo';
import {data, resources} from './data';
import {formatDate} from './utils';

const App = () => {
    const [tooltipItems, setTooltipItems] = useState([])
    const currentDate = new Date(2021, 5, 2);

    const appointmentTooltipShowingHandler = (e) => {
        e.cancel = true;
        const {appointments} = e;
        const colors = {};
        const res = appointments.map((it, idx) => {
            it.color.done((color) => colors[idx] = color);
            return {
                id: idx,
                text: it.appointmentData.text,
                startDate: formatDate(it.appointmentData.startDate),
                endDate: formatDate(it.appointmentData.endDate),
            }
        });
        res.forEach((it) => it.color = colors[it.id]);
        setTooltipItems(res);
    }

    return (
        <div className='container'>
            <List
                width='33%'
                dataSource={tooltipItems}
                itemRender={AppointmentsInfo}
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
                onAppointmentTooltipShowing={appointmentTooltipShowingHandler}
            >
            </Scheduler>
        </div>
    )
}

export default App;