import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchForUser } from "../../ducks/actions";
import "./Header.css";

class People extends React.Component {
    state = {
    }
    render() {
        const { fName, lName, searchForUser } = this.props;
        return (
            <nav>
                <section className="search-user">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="search" onChange={(e) => searchForUser(e.target.value)} />
                    <i className="fa fa-times" onClick={() => searchForUser("")}></i>
                </section>
                <section className="active-user-info">
                    <p>Jacob Anderson</p>
                    <i className="fa fa-user-alt"></i>
                    <i className="fa fa-caret-down"></i>
                </section>
                {/* {
                    fName.length && lName.length ?
                        (<h2>Hello, {`${fName} ${lName}`}</h2>) :
                        (<Link to="/login"><button>LOG IN</button></Link>)
                } */}
            </nav>
        )
    }
}
const mapStateToProps = state => state.activeUser,
    mapDispatchProps = { searchForUser };
export default connect(mapStateToProps, mapDispatchProps)(People);