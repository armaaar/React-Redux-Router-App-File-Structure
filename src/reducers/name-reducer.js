import { CHANGE_NAME } from '../actions/name-actions'

export default function nameReducer (state = "World", action) {
    switch (action.type) {
        case CHANGE_NAME:
            return action.payload.name

        default:
            return state
    }
}
