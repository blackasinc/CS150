import React from 'react';
import '../resources/SplitsheetIdDisplay.css';

function SplitsheetIdDisplay(props) {
  const permalinkUrl = `${window.location.origin}/splitsheet/${props.splitsheetId}`;
  return (
    <p className="splitsheet-id-display-container">
      Splitsheet ID {props.splitsheetId}
      <br />
      Permalink at <a href={permalinkUrl}>{permalinkUrl}</a>
    </p>
  );
}

export default SplitsheetIdDisplay;