import React from 'react';
import '../resources/RequestStatusDisplay.css';

function RequestStatusDisplay(props) {
  if (props.requestStatus.didSucceed) {
    return (
      <div>
        <h1>Request Succeeded</h1>
        <p>status code {props.requestStatus.statusCode}</p>
      </div>
    );
  } else {
    return (
      <div className="error-message">
        <h1>Request Failed</h1>
        <p>
          status code {props.requestStatus.statusCode}
          <br />
          {props.requestStatus.errorMessage}
        </p>
      </div>
    )
  }
}

export default RequestStatusDisplay;
