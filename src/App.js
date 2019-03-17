import React, { Component } from 'react';
import { connect } from 'react-redux';
import routes from './routes'
import './App.css';
import { getLocalData, updateActiveUser } from './ducks/actions';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        {routes}
        {/* <Footer /> */}
      </>
    );
  }
}
const mapStateToProps = state => state.activeUser
export default connect(mapStateToProps, { updateActiveUser })(App);
