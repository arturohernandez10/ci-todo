import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { devToolsEnhancer  } from 'redux-devtools-extension'
import data from "./database.js"


fetch("./database").then( (response) => {
    response.body.json().then( (json) => {

      const store = createStore(rootReducer, json, devToolsEnhancer());

      render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      )


    })
  })
