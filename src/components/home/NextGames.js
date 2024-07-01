// import React from 'react';

// const {google} = require('googleapis');


// const blogger = google.calendar({
//   version: 'v3',
//   auth: 'AIzaSyCiccwpTmX5l97jqZnkn7bEICATtjOtKYo'
// });

// const params = {
//   calendarId: 't63lr6p3ve84gocn79jjaglg7o@group.calendar.google.com'
// };

// // get the blog details
// calendar.events.get(params, (err, res) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log(`The calendar url is ${res.data}`);
// });

// export const NextGames = () => {
//   return (
//     <div id='calendar-modal' className='modal'>
//       <div className='modal-content' style={{ textAlign: 'center' }}>
//         <iframe
//           src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dDYzbHI2cDN2ZTg0Z29jbjc5amphZ2xnN29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showNav=1&amp;showTitle=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA'
//           style={{ borderWidth: 0 }}
//           width='600'
//           height='600'
//           frameBorder='0'
//           scrolling='no'
//         ></iframe>
//       </div>
//     </div>
//   );
// };
