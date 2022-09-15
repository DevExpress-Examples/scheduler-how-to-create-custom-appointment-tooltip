import React, { useEffect, useState } from 'react';

const AppointmentsInfo = ({data}) => {
    const {text, colorDef, startDate, endDate} = data;
    const [color, setColor] = useState();

    useEffect(() => {
        colorDef.done((color) => setColor(color));
    }, [colorDef]);

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
