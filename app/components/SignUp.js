import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

class SignUp extends Component {
    handleGoToSignIn() {
        browserHistory.push('/SignIn');
    }

    render() {
        const { onSignUpClick } = this.props;

        return (
            <div>
                <label>First Name: <input id='firstnameinput' ref='firstNameText' /></label>
                <br />
                <label>Last Name: <input id='lastnameinput' ref='lastNameText' /></label>
                <br />
                <label>User Name: <input id='usernameinput' ref='userNameText' /></label>
                <br />
                <label>Email: <input id='emailinput' ref='emailText' /></label>
                <br />
                <label>Password: <input id='passwordinput' ref='passwordText' /></label>
                <br />
                <label>Repassword: <input /></label>
                <br />
                <button onClick={() => onSignUpClick(this.refs.firstNameText.value, this.refs.lastNameText.value, this.refs.userNameText.value, this.refs.emailText.value, this.refs.passwordText.value)}>Sign Up</button>
                {' '}
                <button onClick={this.handleGoToSignIn}>Sign In</button>
            </div>
        );
    }
}

SignUp.propTypes = {
    onSignUpClick: PropTypes.func.isRequired
}

export default SignUp;