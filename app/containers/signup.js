import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUp from '../components/SignUp.js';
import * as signUpActions from '../actions/signup.js';

const mapStateToProps = (state) => {
    // return {
    //     status: state.status,
    //     message: state.message
    // }
    return {
        signup: state.signup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(signUpActions, dispatch);
}

const signUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

export default signUpContainer;