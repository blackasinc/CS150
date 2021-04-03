import React from 'react';
import { Redirect } from 'react-router';
import getFromApi from '../helper/getFromApi';
import loadingGif from '../resources/loading.gif';
import RequestResultDisplay from './RequestResultDisplay';

const FETCHING_SPLITSHEET = 0;
const FETCH_COMPLETE = 1;
const RETURN_TO_FORM = 2;

class SplitsheetLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestResult: null,
      lookupStatus: FETCHING_SPLITSHEET
    };
  }

  getSplitsheetId() {
    return this.props.match.params.splitsheetId;
  }

  componentDidMount() {
    getFromApi(this.getSplitsheetId())
      .then(requestResult => {
        this.setState({ requestResult, lookupStatus: FETCH_COMPLETE });
      });
  }

  returnToForm = () => {
    this.setState({ lookupStatus: RETURN_TO_FORM });
  }

  render() {
    switch (this.state.lookupStatus) {
      case (FETCHING_SPLITSHEET):
        return (
          <img src={loadingGif} alt='Loading' />
        );
      case (RETURN_TO_FORM):
        return (
          <Redirect to="/" />
        )
      case (FETCH_COMPLETE):
      default:
        return (
          <RequestResultDisplay onReturn={this.returnToForm}
            splitsheet={this.state.requestResult.splitsheet}
            splitsheetId={this.getSplitsheetId()}
            requestStatus={this.state.requestResult.status} />
        );
    }
  }
}

export default SplitsheetLookup;
