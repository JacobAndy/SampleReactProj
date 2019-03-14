import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './ducks/store'
import './App.css';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import People from './components/people/People'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <People />
        <Footer />
      </Provider>
    );
  }
}

export default App;
