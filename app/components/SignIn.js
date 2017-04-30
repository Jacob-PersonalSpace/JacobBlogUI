import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

class SignIn extends Component {
    handleGoToSignUp() {
        browserHistory.push('/SignUp');
    }

    render() {
        const { onSignInClick } = this.props;

        return (
            <div>
                <label>Account: <input placeholder='UserName or Email' ref='accountText' /></label>
                <br />
                <label>Password: <input ref='passwordText' /></label>
                <br />
                <button onClick={() => onSignInClick(this.refs.accountText.value, this.refs.passwordText.value)}>Sign In</button>
                {' '}
                <button onClick={this.handleGoToSignUp}>Sign Up</button>
            </div>
        );
    }
}

SignIn.propTypes = {
    onSignInClick: PropTypes.func.isRequired
}

export default SignIn;