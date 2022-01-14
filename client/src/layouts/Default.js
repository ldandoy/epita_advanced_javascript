import React, {useEffect} from 'react'
import axios from 'axios'
import { useRecoilState } from "recoil"
import { Link } from "react-router-dom"

import userState from "../atoms/userAtom"

const Default = ({children}) => {
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
            } catch (error) {
                console.error(error.response.data)
            }
        }

        getUser()
        
    }, [])

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/animals">Animals</Link>
                { !user.isAuth && <Link to ='/login'>Login</Link> }
                { !user.isAuth && <Link to='/register'>Register</Link> }
                { user.isAuth && <Link to ='/account'>{user.user.email}</Link>}
                { user.isAuth && <Link to ='/logout'>Logout</Link>}
            </nav>
            {children}
        </div>
    )
}

export default Default
