import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song_title: '',
      users: [],
      signed_date: '',
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
        last_name: '',
        email: '',
        ownership_percentage: '',
        phone_number: '',
        signature: ''
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
                        const newState = { users: [...prevState.users] };
                        newState.users[index].first_name = event.target.value;
                        return newState;
                      });
                    }} />
                  <br />
                  <label>User #{index + 1} Last Name:</label>
                  <input type="text"
                    value={value.last_name}
                    onChange={(event) => {
                      this.setState(prevState => {
                        const newState = { users: [...prevState.users] };
                        newState.users[index].last_name = event.target.value;
                        return newState;
                      });
                    }} />
                  <br />
                  <label>User #{index + 1} Email:</label>
                  <input type="email"
                    value={value.email}
                    onChange={(event) => {
                      this.setState(prevState => {
                        const newState = { users: [...prevState.users] };
                        newState.users[index].email = event.target.value;
                        return newState;
                      });
                    }} />
                  <br />
                  <label>User #{index + 1} Phone Number:</label>
                  <input type="tel"
                    value={value.phone_number}
                    onChange={(event) => {
                      this.setState(prevState => {
                        const newState = { users: [...prevState.users] };
                        newState.users[index].phone_number = event.target.value;
                        return newState;
                      });
                    }} />
                  <br />
                  <label>User #{index + 1} Ownership Percent:</label>
                  <input type="number"
                    value={value.ownership_percentage}
                    onChange={(event) => {
                      this.setState(prevState => {
                        const newState = { users: [...prevState.users] };
                        newState.users[index].ownership_percentage = event.target.value;
                        return newState;
                      });
                    }} />
                  <br />
                  <label>User #{index + 1} Signature:</label>
                  <input type="text"
                    value={value.signature}
                    onChange={(event) => {
                      this.setState(prevState => {
                        const newState = { users: [...prevState.users] };
                        newState.users[index].signature = event.target.value;
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

        <iframe width="100%" height="800px"></iframe>
      </div>

    );
  }
}

export default Form;
