import React from 'react';
import { getLocalData } from './ducks/actions';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from 'react-router-dom';
import People from './components/people/People'
import Login from './components/login/Login'
import Home from './components/home/Home'

const PrivateRoute = ({ component: Component, ...rest }) => (<Route {...rest} render={(props) => {
    const { fName, lName } = getLocalData()
    if (fName.length && lName.length) {
        return <Component {...props} />
    }
    else {
        return <Redirect to={
            {
                pathname: "/login",
                state: { from: props.location }
            }
        }
        />
    }
}} />)

export default (
    <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/people" component={People} />
        <Route path="/" component={Home} />
    </Switch>
)
