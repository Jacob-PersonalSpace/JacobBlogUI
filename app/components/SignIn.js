import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div>
                <label>Account: <input placeholder='UserName or Email' /></label>
                {' '}
                <label>Password: <input /></label>
                {' '}
                <button>Sign In</button>
                {' '}
                <button>Sign Up</button>
            </div>
        );
    }
}

export default Signin;