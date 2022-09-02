import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
  state = {
    data: { name: "", username: "", password: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
