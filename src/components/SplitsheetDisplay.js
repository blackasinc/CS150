import React from 'react';
import PdfDownloadButton from './PdfDownloadButton';

function SplitsheetDisplay(props) {
  return (
    <div>
      <ul>
        <li>Song Title: {props.splitsheet.song_title}</li>
        {
          props.splitsheet.users.map((value, index) => {
            return (
              <div key={index}>
                <li>User #{index + 1}</li>
                <ul>
                  <li>First Name: {value.first_name}</li>
                  <li>Last Name: {value.last_name}</li>
                  <li>Email: {value.email}</li>
                  <li>Phone Number: {value.phone_number}</li>
                  <li>Ownership Percentage: {value.ownership_percentage}</li>
                  <li>Signature: {value.signature}</li>
                </ul>
              </div>
            )
          })
        }
        <li>Signed Date: {props.splitsheet.signed_date}</li>
        <li>Location: {props.splitsheet.location}</li>
      </ul>
      <PdfDownloadButton splitsheet={props.splitsheet} />
    </div>
  );
};

export default SplitsheetDisplay;
