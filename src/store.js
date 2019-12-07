import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import nameReducer from './reducers/name-reducer'

const combinedReducers = combineReducers({
    name: nameReducer
})

const storeEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
    combinedReducers,
    {
        name: "World"
    },
    storeEnhancers
)
