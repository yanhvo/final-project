import React from 'react';

export function CaptureDateView(props) {
    var { capture_date }=props;
    return(
        <span>
            Дата поимки: {capture_date}
        </span>
    )
}
