import React from "react";

/**
 *  DateString - выводит текущую дату
 */
const DateString = () => {
    return (
        <div>
            {new Date().toLocaleDateString()}
        </div>
    );
};

export default DateString;