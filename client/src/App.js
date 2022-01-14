import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

import { ThemeContext } from './contexts/themes'

import Home from './pages/Home'
import Animals from './pages/Animals'
import Login from './pages/Login'
import Register from './pages/Register'

import SwicherMode from './components/SwicherMode'

const App = () => {
    const [{ theme }] = useContext(ThemeContext)

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
                    withCredentials: true
                })
                console.log("getUSer", res.data)
            } catch (error) {
                console.error(error.response.data)
            }
        }

        getUser()
        
    }, [])

    return (<BrowserRouter>
        <div className='app' style={theme}>
            <SwicherMode />

            <nav>
                <Link to="/">Home</Link>
                <Link to="/animals">Animals</Link>
                <Link to ='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/animals' element={<Animals />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    </BrowserRouter>)
}

export default App
