import React from 'react';

const FormInput = props => {
  return (
    <div>
      <label>{props.title}:</label>
      <input type={props.inputType}
        value={props.defaultValue}
        onChange={event => props.onChange(event)} />
    </div>
  )
}

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

  createUserInputOnChangeCallback = (index, field) => {
    return event => {
      this.setState(prevState => {
        const newState = { users: [...prevState.users] };
        newState.users[index][field] = event.target.value;
        return newState;
      });
    };
  }

  render() {
    return (
      <div>
        <h1>Make a Splitsheet</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput title="Song Title"
            inputType="text"
            defaultValue={this.state.song_title}
            onChange={(event) => this.setState({song_title: event.target.value})} />
          {
            this.state.users.map((value, index) => (
              <div key={index}>
                <p>User #{index + 1}</p>
                <div>
                  <FormInput title="First Name"
                    inputType="text"
                    defaultValue={value.first_name}
                    onChange={this.createUserInputOnChangeCallback(index, 'first_name')} />
                  <FormInput title="Last Name"
                    inputType="text"
                    defaultValue={value.last_name}
                    onChange={this.createUserInputOnChangeCallback(index, 'last_name')} />
                  <FormInput title="Email"
                    inputType="email"
                    defaultValue={value.email}
                    onChange={this.createUserInputOnChangeCallback(index, 'email')} />
                  <FormInput title="Phone Number"
                    inputType="tel"
                    defaultValue={value.phone_number}
                    onChange={this.createUserInputOnChangeCallback(index, 'phone_number')} />
                  <FormInput title="Ownership Percentage"
                    inputType="number"
                    defaultValue={value.ownership_percentage}
                    onChange={this.createUserInputOnChangeCallback(index, 'ownership_percentage')} />
                  <FormInput title="Signature"
                    inputType="text"
                    defaultValue={value.signature}
                    onChange={this.createUserInputOnChangeCallback(index, 'signature')} />
                </div>
              </div>
            ))
          }
          <button onClick={this.addUser}>
            Add User
          </button>
          <FormInput title="Signed Date"
            inputType="text"
            defaultValue={this.state.signed_date}
            onChange={event => this.setState({signed_date: event.target.value})} />
          <FormInput title="Location"
            inputType="text"
            defaultValue={this.state.location}
            onChange={event => this.setState({location: event.target.value})} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
