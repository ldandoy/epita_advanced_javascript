import React, {useContext} from 'react'

import { ThemeContext } from './contexts/themes'
import Hello from './components/Hello'
import Facts from './components/Facts'
import SwicherMode from './components/SwicherMode'
import TestForm from './components/TestForm'

const App = () => {
    const [{ theme }] = useContext(ThemeContext)

    return (<div className='app' style={theme}>
        <SwicherMode />
        <Hello name="Loïc" />
        <Facts />
        <TestForm />
    </div>)
}

export default App
