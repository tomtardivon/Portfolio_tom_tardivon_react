import {creatStore, applyMiddleware, combineReducers, createStore} from 'redux'
import articleReducer from './articles/articleReducer'
import thunk from 'redux-thunk'

const roootReducer = combineReducers ({
    articleReducer
})

const store = createStore (roootReducer,applyMiddleware(thunk))

export default store ;