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

// const PrivateRoute = ({ component: Component, ...rest }) => (<Route {...rest} render={(props) => {
//     // const { fName, lName } = getLocalData()
//     // console.log(fName, lName)
//     // console.log("rest", { ...rest })
//     // console.log("props", props)
//     // if (false) {
//     //     return <Component {...props} />
//     // }
//     // else {
//     return <Redirect to="/" />
//     // }
// }} />)

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People} />
    </Switch>
)
