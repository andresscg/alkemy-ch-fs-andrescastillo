import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/global.css'
import {applyMiddleware, createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'

const composeEnhancements = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(rootReducer, composeEnhancements(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)