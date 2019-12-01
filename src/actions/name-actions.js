/*
* action types
*/
export const CHANGE_NAME = 'name:changeName'

/*
* action creators
*/
export function changeName (newName) {
    return {
        type: CHANGE_NAME,
        payload: {
            name: newName
        }
    }
}
