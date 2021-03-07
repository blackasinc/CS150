import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song_title: '',
      users: [],
      signed_date: '2011-01-25',
      location: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const splitsheet = { ...this.state };
    this.props.onSubmit(splitsheet);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Song Title:</label>
        <input type="text"
          value={this.state.song_title}
          onChange={(event) => this.setState({song_title: event.target.value})} />
        <br />
        <label>Signed Date:</label>
        <input type="date"
          value={this.state.signed_date}
          onChange={(event) => this.setState({signed_date: event.target.value})} />
        <br />
        <label>Location:</label>
        <input type="text"
          value={this.state.location}
          onChange={(event) => this.setState({location: event.target.value})} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
