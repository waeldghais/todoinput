import React from "react";
const name=/^[A-Z]*$/;
const cin=/^[0-9]{8}$/;
const cp=/^[0-9]{14}$/;
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class TodolistContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      cin: "",
      cp:"",
      emailAddress: "",
      password: "",
      NameError: "",
      cpError:"",
      emailAddressError: "",
      passwordError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatecin = this.validatecin.bind(this);
    this.validatecp = this.validatecp.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "Name",
      "cin",
      "cp",
      "emailAddress",
      "password",
      
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "Name") isValid = this.validateName();
    else if (name === "cin") isValid = this.validatecin();
    else if (name === "cp") isValid = this.validatecp();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
   
    return isValid;
  }

  validateName() {
    let NameError = "";
    const value = this.state.Name;
    if (value.trim() === "") NameError = "Name is required";
    else if (!name.test(value))
    NameError = "Name is not valid";
    this.setState({
      NameError
    });
    return NameError === "";
  }

  validatecin() {
    let cinError = "";
    const value = this.state.cin;
    if (value.trim() === "") cinError = "Cin is required";
    else if (!cin.test(value))
    cinError = "Cin is not valid";
    this.setState({
      cinError
    });
    return cinError === "";
  }
  validatecp() {
    let cpError = "";
    const value = this.state.cp;
    if (value.trim() === "") cpError = "Cin is required";
    else if (!cp.test(value))
    cpError = "Cp is not valid";
    this.setState({
      cpError
    });
    return cpError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }



  render() {
    return (
      <div className="main" >
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.Name}</div>
            <div>CIN: {this.state.cin}</div>
            <div>Email Address: {this.state.emailAddress}</div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={this.state.Name}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.NameError && (
              <div className="errorMsg">{this.state.NameError}</div>
            )}
            <input
              type="text"
              placeholder="CIN"
              name="cin"
              value={this.state.cin}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.cinError && (
              <div className="errorMsg">{this.state.cinError}</div>
            )}
            <input
              type="text"
              placeholder="Compte Banque"
              name="cp"
              value={this.state.cp}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.cpError && (
              <div className="errorMsg">{this.state.cpError}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <button>Signup</button>
          </form>
          </div>
        )}
      </div>
    );
  }
}
export default TodolistContainer;