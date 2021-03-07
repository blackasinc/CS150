import React from 'react';
import loadingGif from '../resources/loading.gif';
import Form from './Form';
import Result from './Result';

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

    fetch('https://virtserver.swaggerhub.com/santidmar/SplitSheetAPI/2.0.0/splitsheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: this.state.splitsheet
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response);
      }
    })
    .then(data => this.setState({splitsheetId: data.splitsheetId}))
    .catch(response => {
      this.setState({
        errorCode: response.status,
        errorMessage: response.statusText
      })
    })
    .finally(() => this.setState({isLoading: false}));
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
    if (this.state.splitsheet) {
      return (
        <Result onReturn={this.resetState}
          splitsheet={{ ...this.state.splitsheet, splitsheetId: this.state.splitsheetId }} 
          error={{ errorCode: this.state.errorCode, errorMessage: this.state.errorMessage }} />
      );
    }
    if (this.state.isLoading) {
      return (
        <img src={loadingGif} alt='Loading' />
      );
    } else {
      return (
        <div>
          <h1>Make a Splitsheet</h1>
          <Form onSubmit={this.postForm} />
        </div>
      );
    }
  }
}

export default App;
