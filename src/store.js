import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import nameReducer from './reducers/name-reducer'

const combinedReducers = combineReducers({
    name: nameReducer
})

const storeEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

export const store = createStore(
    combinedReducers,
    {
        name: "World"
    },
    storeEnhancers
)
