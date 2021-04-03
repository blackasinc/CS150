import React from 'react';
import PdfDownloadButton from './PdfDownloadButton';

const RequestStatusDisplay = props => {
  return (
    <div>
      <h1>Request {props.requestStatus.didSucceed ? 'Succeeded' : 'Failed' }</h1>
      <p>
        status code {props.requestStatus.statusCode}
        <br />
        {props.request.errorMessage ?? ''}
      </p>
    </div>
  );
}

const SplitsheetDisplay = props => {
  if (props.splitsheet) {
    return (
      <div>
        <ul>
          <li>Song Title: {props.splitsheet.song_title}</li>
          {
            props.splitsheet.users.map((value, index) => {
              return (
                <div key={index}>
                  <li>User #{index + 1} First Name: {value.first_name}</li>
                  <li>User #{index + 1} Last Name: {value.last_name}</li>
                  <li>User #{index + 1} Email: {value.email}</li>
                  <li>User #{index + 1} Phone Number: {value.phone_number}</li>
                  <li>User #{index + 1} Ownership Percentage: {value.ownership_percentage}</li>
                  <li>User #{index + 1} Signature: {value.signature}</li>
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
  } else {
    return (
      <p>no splitsheet to display</p>
    )
  }
};

const RequestResultDisplay = props => (
  <div>
    <RequestStatusDisplay requestStatus={props.requestStatus} />
    {props.splitsheetId && <p>Splitsheet ID {props.splitsheetId}</p> }
    <SplitsheetDisplay splitsheet={props.splitsheet} />
    <br />
    <button onClick={props.onReturn}>
      ← Create Another Splitsheet
    </button>
  </div>
);

export default RequestResultDisplay;
