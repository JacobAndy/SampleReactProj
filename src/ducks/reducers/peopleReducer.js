import defaultData from '../../assets/data'
import { SET_ACTIVE_PERSON, SEARCH_FOR_USER } from '../actions'

const initialState = {
    currentSearch: "",
    people: [...defaultData.People],
    activePerson: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_PERSON: {
            return {
                ...state,
                activePerson: action.payload
            }
        }
        case SEARCH_FOR_USER: {
            return { ...state, currentSearch: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}