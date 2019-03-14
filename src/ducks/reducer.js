import defaultData from '../assets/data'
import { SET_ACTIVE_PERSON } from './actions'

const initialState = {
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
        default: {
            return { ...state }
        }
    }
}