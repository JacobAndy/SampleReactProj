
export const SET_ACTIVE_PERSON = 'SET_ACTIVE_PERSON';
export const UPDATE_ACTIVE_USER = 'UPDATE_ACTIVE_USER';
export const SEARCH_FOR_USER = "SEARCH_FOR_USER";

export function setActivePerson(i) {
    return {
        type: SET_ACTIVE_PERSON,
        payload: i,
    }
}
export function updateActiveUser(f, l) {
    return {
        type: UPDATE_ACTIVE_USER,
        payload: { f, l }
    }
}

export function getLocalData() {
    const auth = JSON.parse(localStorage.getItem("parallonAuth"));
    const { fName, lName } = auth || { fName: "", lName: "" };
    return { fName, lName }
}
export function searchForUser(name) {
    return {
        type: SEARCH_FOR_USER,
        payload: name.toLowerCase()
    }
}