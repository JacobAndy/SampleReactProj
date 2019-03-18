import React, { Component } from 'react';
import { connect } from 'react-redux';
import routes from './routes'
import './App.css';
import { updateActiveUser } from './ducks/actions';

import Header from './components/header/Header'
class App extends Component {
  render() {
    return (
      <>
        <Header />
        {routes}
      </>
    );
  }
}
const mapStateToProps = state => state.activeUser
export default connect(mapStateToProps, { updateActiveUser })(App);
