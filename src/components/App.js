import React from 'react';
import loadingGif from '../resources/loading.gif';
import Form from './Form';
import Result from './Result';
import postToApi from '../helper/postToApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splitsheetId: null,
      splitsheet: null,
      errorCode: null,
      errorMessage: null,
      isLoading: false,
    };
  }

  postForm = splitsheet => {
    this.setState({
      splitsheet: splitsheet,
      isLoading: true
    });

    postToApi(splitsheet)
      .then(result => this.setState({ ...result, isLoading: false }));
  };

  resetState = () => {
    this.setState({
      splitsheetId: null,
      splitsheet: null,
      errorCode: null,
      errorMessage: null
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <img src={loadingGif} alt='Loading' />
      );
    } else if (this.state.splitsheet) {
      return (
        <Result onReturn={this.resetState}
          splitsheetId={this.state.splitsheetId}
          splitsheet={this.state.splitsheet}
          errorCode={this.state.errorCode}
          errorMessage={this.state.errorMessage} />
      );
    } else {
      return (
        <Form onSubmit={this.postForm} />
      );
    }
  }
}

export default App;
