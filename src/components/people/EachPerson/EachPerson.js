import React, { Component } from 'react'
import { connect } from 'react-redux';
import classnames from 'classnames';
import "./EachPerson.css";

import { setActivePerson } from '../../../ducks/actions';

class EachPerson extends Component {
    renderPeople = () => {
        const { people, setActivePerson, activePerson } = this.props;
        return people.map((person, i) => {
            const classes = classnames(
                "person_std",
                {
                    person_active: activePerson === i,
                    person_inactive: activePerson !== i,
                }
            )
            return (
                <li
                    className={classes}
                    onClick={() => setActivePerson(i)}
                    key={person.name}>
                    {person.name}
                </li>
            )
        }
        )
    }
    render() {
        const peopleMap = this.renderPeople()
        return (<ol>{peopleMap}</ol>)
    }
}
const mapStateToProps = state => state.peopleData,
    mapDispatchToProps = { setActivePerson };
export default connect(mapStateToProps, mapDispatchToProps)(EachPerson)