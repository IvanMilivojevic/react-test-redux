import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Auth.module.css";
import FormField from "../../Components/UI/FormField";
import { authUser } from "../../store/actions";
import Spinner from "../../Components/UI/Spinner/Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: [
        {
          name: "email",
          placeholder: "Email address",
          type: "input",
          value: "",
          config: "email",
          required: true,
          valid: false,
        },
        {
          name: "password",
          placeholder: "Password",
          type: "input",
          value: "",
          config: "password",
          required: true,
          valid: false,
        },
      ],
      formSubmitted: false,
      isSignUp: true,
    };
  }

  inputValidation = (value) => {
    const inputValue = value.trim();

    return inputValue !== "";
  };

  changeValueHandler = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const fieldValid = this.inputValidation(fieldValue);

    this.setState((prevState) => {
      const updatedForm = [...prevState.form];
      const updatedField = { ...updatedForm.find((f) => f.name === fieldName) };
      const updatedFieldIndex = updatedForm.findIndex((f) => f.name === fieldName);
      updatedField.value = fieldValue;
      updatedField.valid = fieldValid;
      updatedForm[updatedFieldIndex] = updatedField;

      return {
        form: updatedForm,
      };
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    const shouldSubmit = this.state.form.every((field) => field.valid);

    if (shouldSubmit) {
      const authData = {};
      this.state.form.forEach((field) => {
        authData[field.name] = field.value;
      });
      authData.returnSecureToken = true;

      this.props.onAuth(authData, this.state.isSignUp);
    }

    this.setState({ formSubmitted: true });
  };

  toggleForm = () => {
    this.setState((prevState) => {
      return {
        isSignUp: !prevState.isSignUp,
      };
    });
  };

  render() {
    let redirectAuth = null;

    if (this.props.isAuthorized) {
      redirectAuth = <Redirect to={this.props.authRedirect} />;
    }
    return (
      <>
        {redirectAuth}
        <div className={styles.FormWrapper}>
          <button type="button" onClick={this.toggleForm}>
            Switch to {this.state.isSignUp ? "Sign In" : "Sign Up"} Form
          </button>
          <h2>{this.state.isSignUp ? "Sign Up Form:" : "Sign In Form"}</h2>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <form>
              {this.state.form.map((field) => (
                <FormField
                  {...field}
                  changed={this.changeValueHandler}
                  key={field.name}
                  checker={this.state.formSubmitted}
                />
              ))}
              <button type="submit" className={styles.SubmitButton} onClick={this.formSubmit}>
                Submit
              </button>
            </form>
          )}
        </div>
      </>
    );
  }
}

Auth.propTypes = {
  onAuth: PropTypes.func,
  loading: PropTypes.bool,
  authRedirect: PropTypes.string,
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loading: state.ath.loading,
    isAuthorized: !!state.ath.token,
    authRedirect: state.ath.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (authData, isSignUp) => dispatch(authUser(authData, isSignUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
