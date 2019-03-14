import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import store from './ducks/store'
import routes from './routes'
import './App.css';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header />
          {routes}
          <Footer />
        </Provider>
      </Router>
    );
  }
}

export default App;
