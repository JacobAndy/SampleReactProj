import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Header.css";

class People extends React.Component {
    state = {}
    render() {
        const { fName, lName } = this.props;
        return (
            <head>
                {
                    fName.length && lName.length ?
                        (<h2>Hello, {`${fName} ${lName}`}</h2>) :
                        (<Link to="/login"><button>LOG IN</button></Link>)
                }
            </head>
        )
    }
}
const mapStateToProps = state => state.activeUser
export default connect(mapStateToProps)(People);