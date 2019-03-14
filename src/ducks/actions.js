
export const SET_ACTIVE_PERSON = 'SET_ACTIVE_PERSON';

export function setActivePerson(i) {

    return {
        type: SET_ACTIVE_PERSON,
        payload: i,
    }

}