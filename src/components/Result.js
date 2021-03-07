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
                    <li>Writer Name: {props.splitsheet.writerName}</li>
                    <li>Song Name: {props.splitsheet.songName}</li>
                    <li>Date: {props.splitsheet.date}</li>
                    <li>Split Percent: {props.splitsheet.splitPercent}</li>
                    <li>Signature: {props.splitsheet.signature}</li>
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
