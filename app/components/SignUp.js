import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <label>First Name: <input /></label>
                {' '}
                <label>Last Name: <input /></label>
                {' '}
                <label>User Name: <input /></label>
                {' '}
                <label>Email: <input /></label>
                {' '}
                <label>Password: <input /></label>
                {' '}
                <label>Repassword: <input /></label>
                {' '}
                <button>Sign Up</button>
            </div>
        );
    }
}

export default Signup;