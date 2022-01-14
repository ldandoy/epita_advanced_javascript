import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { useRecoilState } from "recoil"

import { ThemeContext } from './contexts/themes'
import userState from "./atoms/userAtom"

import Home from './pages/Home'
import Animals from './pages/Animals'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'

import SwicherMode from './components/SwicherMode'

const App = () => {
    const [{ theme }] = useContext(ThemeContext)
    const [user, setUser] = useRecoilState(userState)

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
                    withCredentials: true
                })
                setUser({
                    isAuth: true,
                    user: res.data
                })
                console.log("getUser", res.data)
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
                { !user.isAuth && <Link to ='/login'>Login</Link> }
                { !user.isAuth && <Link to='/register'>Register</Link> }
                { user.isAuth && <Link to ='/account'>{user.user.email}</Link>}
                { user.isAuth && <Link to ='/logout'>Logout</Link>}
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/animals' element={<Animals />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </div>
    </BrowserRouter>)
}

export default App
