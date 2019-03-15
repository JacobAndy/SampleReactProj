import React, { Component } from 'react';
import { connect } from 'react-redux';
import routes from './routes'
import './App.css';
import { getLocalData } from './ducks/actions';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
class App extends Component {
  componentWillMount() {
    // i know will mount is not a good practice,
    // for this case, i need access too data in localStorage
    // before component gets mounted
    const { fName, lName } = getLocalData();
    if (fName.length && lName.length) {

    }
  }
  render() {
    return (
      <>
        <Header />
        {routes}
        <Footer />
      </>
    );
  }
}
const mapStateToProps = state => state.activeUser
export default connect(mapStateToProps, {})(App);
