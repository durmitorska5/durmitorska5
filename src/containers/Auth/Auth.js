import React, { Component } from "react";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Auth.css";
import * as actions from "../../store/actions/index";

import { updateObject, checkValidity } from "../../shared/utility";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Korisnicko ime",
        },

        value: "",
        validation: {
          required: true,
          isEmail: true,
        },

        valid: false,
        touched: false,
      },

      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Lozinka",
        },

        value: "",
        validation: {
          required: true,
          minLength: 6,
        },

        valid: false,
        touched: false,
      },
    },

    isSignup: false,
  };

  componentDidMount() {
    if (this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      }),
    });

    this.setState({
      controls: updatedControls,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    let errorMessage = null;

    const errorMapping = {
      EMAIL_NOT_FOUND: "Email nije pronadjen u bazi stanara",
      INVALID_PASSWORD: "Pogresna lozinka",
      INVALID_EMAIL: "Pogresna email adresa",
      MISSING_PASSWORD: "Molimo unesite lozinku",
    };

    if (this.props.error) {
      errorMessage = (
        <p class="Error">
          {" "}
          {errorMapping[this.props.error.message] || this.props.error.message}
        </p>
      );
    }

    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className="Auth">
        {" "}
        {authRedirect}
        <form onSubmit={this.submitHandler}>
          {" "}
          <h2>Durmitorska 5 online</h2> {form}
          <Button className="Button Success AuthButton">Uloguj se</Button>{" "}
        </form>{" "}
        {this.props.loading && <Spinner />}
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
