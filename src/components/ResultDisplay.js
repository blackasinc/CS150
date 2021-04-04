import React from 'react';
import RequestStatusDisplay from './RequestStatusDisplay';
import SplitsheetDisplay from './SplitsheetDisplay';

const SplitsheetIdDisplay = props => {
  const permalinkUrl = `${window.location.origin}/splitsheet/${props.splitsheetId}`;
  return (
    <p>
      Splitsheet ID {props.splitsheetId}
      <br />
      Permalink at <a href={permalinkUrl}>{permalinkUrl}</a>
    </p>
  );
}

const ResultDisplay = props => (
  <div>
    <RequestStatusDisplay requestStatus={props.requestStatus} />
    {props.splitsheetId ? <SplitsheetIdDisplay splitsheetId={props.splitsheetId} />
                        : null }
    {props.splitsheet ? <SplitsheetDisplay splitsheet={props.splitsheet} />
                      : null }
    <br />
    <button onClick={props.onReturn}>
      ← Create Another Splitsheet
    </button>
  </div>
);

export default ResultDisplay;
