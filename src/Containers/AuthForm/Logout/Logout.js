import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  onLogout: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({ type: "AUTH_LOGOUT" }),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
