import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addMonths from 'date-fns/addMonths';
import "react-datepicker/dist/react-datepicker.css";

function Datepick() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 5)}
            showDisabledMonthNavigation
        />
    );
}

export default Datepick
