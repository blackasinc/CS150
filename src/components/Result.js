import React from 'react';

const StatusDisplay = props => {
  if (props.splitsheetId) {
    return (
      <div>
        <h1>Form Submission Succeeded</h1>
        <p>
          form successfully posted w/ splitsheet ID {props.splitsheetId}
        </p>
      </div>
        );
  } else {
    return (
      <div>
        <h1>Failed to Post</h1>
        <p>
          status code {props.errorCode}
          <br />
          message {props.errorMessage}
        </p>
      </div>
    );
  }
}

const Result = props => (
  <div>
    <StatusDisplay splitsheetId={props.splitsheetId}
      errorCode={props.errorCode}
      errorMessage={props.errorMessage} />
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
    <button onClick={props.onReturn}>
      Return to Form
    </button>
  </div>
);

export default Result;
