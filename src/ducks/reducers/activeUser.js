import { UPDATE_ACTIVE_USER } from '../actions'
const initialState = {
    fName: "",
    lName: ""
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ACTIVE_USER: {
            const { f, l } = action.payload
            return {
                ...state,
                fName: f,
                lName: l,
            }
        }
        default: {
            return { ...state }
        }
    }
}