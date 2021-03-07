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

  addUser = event => {
    event.preventDefault();
    this.setState(prevState => {
      const newUser = {
        first_name: '',
        last_name: 'Johnson',
        email: 'coolguy@dude.com',
        phone_number: '714-555-1234',
        ownership_percentage: 66.7,
        signature: 'd290f1ee-6c54-4b01-90e6-d701748f0851'
      }
      return {
        users: prevState.users.concat([newUser])
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Make a Splitsheet</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Song Title:</label>
          <input type="text"
            value={this.state.song_title}
            onChange={(event) => this.setState({song_title: event.target.value})} />
          <br />
          {
            this.state.users.map((value, index) => {
              return (
                <div key={index}>
                  <label>User #{index + 1} First Name:</label>
                  <input type="text"
                    value={value.first_name}
                    onChange={(event) => {
                      this.setState(prevState => {
                        const newState = Object.assign({}, prevState);
                        newState.users[index].first_name = event.target.value;
                        return newState;
                      });
                    }} />
                </div>
              )
            })
          }
          <button onClick={this.addUser}>
            Add User
          </button>
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
      </div>
    );
  }
}

export default Form;
