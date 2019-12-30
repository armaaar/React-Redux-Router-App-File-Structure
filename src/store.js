import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import nameReducer from './reducers/name-reducer'

const combinedReducers = combineReducers({
    name: nameReducer
})

const storeEnhancers = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(
    combinedReducers,
    {
        name: "World"
    },
    storeEnhancers
)
