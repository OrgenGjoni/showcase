import React from 'react'
import './scss/_main.scss'
import Main from './containers/main/Main'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main>
          <p>test</p>
        </Main>
      </div>
    </Provider>
  )
}

export default App
