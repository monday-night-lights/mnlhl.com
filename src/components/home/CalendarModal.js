import React from 'react';

export const CalendarModal = () => {
  return (
    <div id='calendar-modal' className='modal'>
      <div className='modal-content' style={{ textAlign: 'center' }}>
        <iframe
          src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dDYzbHI2cDN2ZTg0Z29jbjc5amphZ2xnN29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showNav=1&amp;showTitle=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA'
          style={{ borderWidth: 0 }}
          width='600'
          height='600'
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </div>
    </div>
  );
};
