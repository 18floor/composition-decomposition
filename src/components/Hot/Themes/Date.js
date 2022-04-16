import React from "react";

/**
 *  DateString -
 */
const DateString = () => {
    return (
        <div>
            {new Date().toLocaleDateString()}
        </div>
    );
};

export default DateString;