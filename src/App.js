import React, { Component } from 'react';
import { connect } from 'react-redux';
import routes from './routes'
import './App.css';
import { updateActiveUser } from './ducks/actions';

import Header from './components/header/Header'
import People from './components/people/People'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <People />
        {/* {routes} */}
      </>
    );
  }
}
const mapStateToProps = state => state.activeUser
export default connect(mapStateToProps, { updateActiveUser })(App);
