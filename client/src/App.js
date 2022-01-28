import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { ThemeContext } from './contexts/themes'

import Home from './pages/Home'
import Animals from './pages/Animals'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'
import Messages from './pages/Messages'
import Default from './layouts/Default'
import EditMessages from './pages/EditMessages'

const App = () => {
    const [{ theme }] = useContext(ThemeContext)

    return (<BrowserRouter>
        <div className='app' style={theme}>
            <Routes>
                <Route path="/" element={<Default><Home /></Default>} />
                <Route path='/animals' element={<Default><Animals /></Default>} />
                <Route path='/messages' element={<Default><Messages /></Default>} />
                <Route path="/messages/:messageId/edit" element={<Default><EditMessages /></Default>} />
                <Route path='/login' element={<Default><Login /></Default>} />
                <Route path='/register' element={<Default><Register /></Default>} />
                <Route path='/logout' element={<Default><Logout /></Default>} />
            </Routes>
        </div>
    </BrowserRouter>)
}

export default App
