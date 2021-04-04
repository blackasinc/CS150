import React from 'react';
import RequestStatusDisplay from './RequestStatusDisplay';
import SplitsheetDisplay from './SplitsheetDisplay';
import SplitsheetIdDisplay from './SplitsheetIdDisplay';

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
