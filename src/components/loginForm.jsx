import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
// username = React.createRef();

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(error);
    return errors;

    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "username is required";

    // if (account.password.trim() === "")
    //   errors.password = "password is required";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    // //call server
    console.log("submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    // const errors = { ...this.state.account };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.value] = errorMessage;
    // else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
