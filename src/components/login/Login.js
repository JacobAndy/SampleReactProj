import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateActiveUser, getLocalData } from '../../ducks/actions';
import {
    Redirect,
} from 'react-router-dom';

class Login extends Component {
    state = {
        fName: "",
        lName: "",
    }
    handleInputs = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    superDooperHighSecurityLogin = () => {
        const { fName: f, lName: l, } = this.state;
        localStorage.setItem("parallonAuth", JSON.stringify({ ...this.state }))
        this.props.updateActiveUser(f, l)
    }
    render() {
        const { handleInputs, superDooperHighSecurityLogin: Login } = this;
        const { fName, lName } = getLocalData()
        if (fName.length && lName.length) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <h2>Please Log in</h2>
                    <section>
                        <input placeholder="First Name" type="text" name="fName" onChange={handleInputs}></input>
                        <input placeholder="Last Name" type="text" name="lName" n onChange={handleInputs}></input>
                    </section>
                    <button onClick={Login}>LOG IN</button>
                </div>
            )
        }
    }
}
const mapDispatchToProps = {
    updateActiveUser,
}
export default connect(null, mapDispatchToProps)(Login)