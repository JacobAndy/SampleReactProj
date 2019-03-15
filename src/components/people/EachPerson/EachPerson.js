import React, { Component } from 'react'
import { connect } from 'react-redux';
import classnames from 'classnames';
import RightArrow from '../../../assets/icons/play-button.svg'
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
                    <img className="person_std-r-arrow" src={RightArrow} />
                </li>
            )
        }
        )
    }
    render() {
        const peopleMap = this.renderPeople()
        return (<ol id="people-ctn">{peopleMap}</ol>)
    }
}
const mapStateToProps = state => state.peopleData,
    mapDispatchToProps = { setActivePerson };
export default connect(mapStateToProps, mapDispatchToProps)(EachPerson)