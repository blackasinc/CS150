import React from 'react';
import loadingGif from '../resources/loading.gif';
import Form from './Form';
import RequestResultDisplay from './RequestResultDisplay';
import postToApi from '../helper/postToApi';

const SUBMIT_PENDING = 0;
const SUBMITTING = 1;
const SUBMITTED = 2;

class SplitsheetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitsheet: null,
      requestResult: null,
      formSubmitStatus: SUBMIT_PENDING,
    };
  }

  postForm = splitsheet => {
    this.setState({
      splitsheet: splitsheet,
      formSubmitStatus: SUBMITTING
    });

    postToApi(splitsheet)
      .then(requestResult => this.setState({ requestResult, formSubmitStatus: SUBMITTED }));
  };

  resetState = () => {
    this.setState({
      splitsheet: null,
      requestResult: null,
      formSubmitStatus: SUBMIT_PENDING
    });
  }

  render() {
    switch (this.state.formSubmitStatus) {
      case SUBMITTING:
        return (
          <img src={loadingGif} alt='Loading' />
        );
      case SUBMITTED:
        return (
          <RequestResultDisplay onReturn={this.resetState}
            splitsheet={this.state.splitsheet}
            splitsheetId={this.state.requestResult.splitsheetId}
            requestStatus={this.state.requestResult.status} />
        );
      case SUBMIT_PENDING:
      default:
        return (
          <Form onSubmit={this.postForm} />
        );
    }
  }
}

export default SplitsheetForm;
