import React from 'react';

const AppointmentsInfo = (props) => {
    const {text, color, startDate, endDate} = props;
    return (
        <div className='tooltip'>
            <div className='marker' style={{background: color}}/>
            <div>
                <p>{text}</p>
                <p>{`${startDate} - ${endDate}`}</p>
            </div>
        </div>
    );
}

export default AppointmentsInfo;
