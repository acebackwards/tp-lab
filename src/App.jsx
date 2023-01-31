import React from 'react'
import { Route } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'

const App = observer(() => {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
})

export default App;