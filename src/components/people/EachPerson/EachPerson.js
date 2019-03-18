import React, { Component } from 'react'
import { connect } from 'react-redux';
import classnames from 'classnames';
import "./EachPerson.css";

import Burger from './Burger/Burger'
import { setActivePerson } from '../../../ducks/actions';

class EachPerson extends Component {
    state = {
        openBurgerMenu: false
    }
    burgerToggle = () => {
        const burgerVal = this.state.openBurgerMenu;
        this.setState({ openBurgerMenu: !burgerVal })
    }
    renderPeople = () => {
        const { people, setActivePerson, activePerson } = this.props;
        return people.filter(person => person.name.toLowerCase().includes(this.props.currentSearch))
            .map((person, i) => {
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
                        onClick={() => {
                            setActivePerson(i)
                            this.state.openBurgerMenu && this.burgerToggle()
                        }}
                        key={person.name}>
                        {person.name}
                        <i className="fa fa-caret-right fa-lg"></i>
                    </li>
                )
            }
            )
    }
    render() {
        const peopleMap = this.renderPeople()
        const { openBurgerMenu } = this.state;
        return (
            <div className="people-navigation">
                <Burger toggle={this.burgerToggle} status={openBurgerMenu} />
                <ol id="people-ctn" className={openBurgerMenu ? "people-mobile-open" : "people-mobile-closed"}>{peopleMap}</ol>
            </div>)
    }
}
const mapStateToProps = state => state.peopleData,
    mapDispatchToProps = { setActivePerson };
export default connect(mapStateToProps, mapDispatchToProps)(EachPerson)