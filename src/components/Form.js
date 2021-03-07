import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writerName: '',
      songName: '',
      date: '2011-01-25',
      splitPercent: '',
      signature: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const splitsheet = { ...this.state };
    this.props.onSubmit(splitsheet);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Writer Name:</label>
        <input type="text"
          value={this.state.writerName}
          onChange={(event) => this.setState({writerName: event.target.value})} />
        <br />
        <label>Song Name:</label>
        <input type="text"
          value={this.state.songName}
          onChange={(event) => this.setState({songName: event.target.value})} />
        <br />
        <label>Date:</label>
        <input type="date"
          value={this.state.date}
          onChange={(event) => this.setState({date: event.target.value})} />
        <br />
        <label>Split Percent:</label>
        <input type="number"
          value={this.state.splitPercent}
          onChange={(event) => this.setState({splitPercent: event.target.value})} />
        <br />
        <label>Signature:</label>
        <input type="text"
          value={this.state.signature}
          onChange={(event) => this.setState({signature: event.target.value})} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
