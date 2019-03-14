import { createStore, combineReducers } from 'redux';
import parallonReducer from "./reducers/peopleReducer";
import activeUserReducer from "./reducers/activeUser"

const reducers = combineReducers({
    peopleData: parallonReducer,
    activeUser: activeUserReducer,
})

export default createStore(reducers)