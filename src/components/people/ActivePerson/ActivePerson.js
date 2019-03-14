import React from 'react';
import { connect } from 'react-redux';
import "./ActivePerson.css"

function ActivePerson({ people, activePerson }) {
    if (activePerson) {
        return (
            <div>
                <p>{people[activePerson].name}</p>
            </div>
        )
    } else {
        return <p>Please select a user to view</p>
    }
}

const mapStateToProps = state => state.peopleData,
    mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(ActivePerson)