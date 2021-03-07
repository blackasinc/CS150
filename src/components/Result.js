import React from 'react';

const ResultDisplay = props => {
    if (props.errorCode) {
        return (
            <div>
                <h1>Failed to Post</h1>
                status code {props.errorCode}
                message {props.errorMessage}
            </div>
        );
    } else {
        return (
            <div>
                <h1>Form Submission Succeeded</h1>
                <ul>
                    <li>Splitsheet ID: {props.splitsheet.splitsheetId}</li>
                    <li>Song Title: {props.splitsheet.song_title}</li>
                    <li>Signed Date: {props.splitsheet.signed_date}</li>
                    <li>Location: {props.splitsheet.location}</li>
                </ul>
            </div>
        );
    }
}

const Result = props => (
    <div>
        <ResultDisplay splitsheet={props.splitsheet}
            error={props.error} />
        <button onClick={props.onReturn}>
            Return to Form
        </button>
    </div>
);

export default Result;
