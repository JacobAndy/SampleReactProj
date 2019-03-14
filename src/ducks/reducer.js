import defaultData from '../assets/data'
const initialState = { ...defaultData }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return { ...state }
        }
    }
}