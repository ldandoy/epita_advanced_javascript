import React, {useEffect} from 'react'
import axios from 'axios'
import { useRecoilState } from "recoil"
import { Link } from "react-router-dom"

import SwicherMode from '../components/SwicherMode'
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

    return (<>
        <nav className="bg-blue-800 navbar-dark navbar navbar-fixed-top">
            <div className="navbar-container-fluid">
                <div className="navbar-content-menu">
                    <ul className="navbar-menu navbar-menu-left">
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/animals">Animals</Link>
                        </li>
                        { user.isAuth && <li className="navbar-item">
                            <Link className="navbar-link" to ='/messages'>Messages</Link>
                        </li>}
                    </ul>

                    <ul className="navbar-menu-right plr-10">
                        { !user.isAuth && <li className="navbar-item"><Link className="navbar-link" to ='/login'>Login</Link></li> }
                        { !user.isAuth && <li className="navbar-item"><Link className="navbar-link" to='/register'>Register</Link></li> }
                        { user.isAuth && <li className="navbar-item"><Link className="navbar-link" to ='/account'>{user.user.email}</Link></li>}
                        { user.isAuth && <li className="navbar-item"><Link className="navbar-link" to ='/logout'>Logout</Link></li>}
                        <li className="navbar-item"><SwicherMode /></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container pt-40">
            {children}
        </div>
    </>)
}

export default Default
