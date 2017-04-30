import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignIn from '../components/SignIn.js';
import * as signInActions from '../actions/signin.js';

const mapStateToProps = (state) => {
    // return {
    //     status: state.status,
    //     message: state.message
    // }
    return {
        signin: state.signin
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(signInActions, dispatch);
}

const signInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default signInContainer;