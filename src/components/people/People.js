import React from 'react';
import { connect } from 'react-redux';
import "./People.css";

import EachPerson from "./EachPerson/EachPerson"
import ActivePerson from "./ActivePerson/ActivePerson";

class People extends React.Component {
    state = {}
    render() {
        return (
            <div className="people-pg">
                <EachPerson />
                <ActivePerson />
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(People);