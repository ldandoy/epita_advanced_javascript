import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { ThemeContext } from './contexts/themes'

import Home from './pages/Home'
import Animals from './pages/Animals'

import SwicherMode from './components/SwicherMode'

const App = () => {
    const [{ theme }] = useContext(ThemeContext)

    return (<BrowserRouter>
        <div className='app' style={theme}>
            <SwicherMode />

            <nav>
                <Link to="/">Home</Link>
                <Link to="/animals">Animals</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/animals' element={<Animals />} />
            </Routes>
        </div>
    </BrowserRouter>)
}

export default App