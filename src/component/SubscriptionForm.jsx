import React, { Component } from "react";

class SubscriptionForm extends Component {
  state = {
    email: '',
    isAgreeWithTerms: false, 
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleCheckBox = (event) => {
    this.setState({ isAgreeWithTerms: event.target.checked })
  }

  render() {
    const { email, isAgreeWithTerms } = this.state;

    return (
      <div style={{textAlign: "center"}}>
        <input 
          type='email' 
          name='email' 
          placeholder='email' 
          value={email}
          onChange={this.handleEmail}
        />
        <br />  
        <label>
          <input 
            type='checkbox' 
            name='subscription' 
            checked={isAgreeWithTerms}
            onChange={this.handleCheckBox}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button>Send</button>
      </div>
    )
  }
}

export {SubscriptionForm};
