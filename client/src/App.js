import React, {useContext} from 'react'

import { ThemeContext } from './contexts/themes'
import Hello from './components/Hello'
import Facts from './components/Facts'
import SwicherMode from './components/SwicherMode'

const App = () => {
    const [{ theme }] = useContext(ThemeContext)

    return (<div className='app' style={theme}>
        <SwicherMode />
        <Hello name="Loïc" />
        <Facts />
    </div>)
}

export default App
