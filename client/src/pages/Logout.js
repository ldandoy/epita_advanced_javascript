import {useEffect} from 'react'
import axios from 'axios'
import {useRecoilState} from "recoil"
import { useNavigate } from 'react-router-dom'

import userState from '../atoms/userAtom'

const Logout = () => {
    let navigate = useNavigate()
    const [user, setUser] = useRecoilState(userState)

    useEffect(() => {
        const logout = async () => {
            console.log('logout');
            if (user.isAuth) {
                await axios.get(`${process.env.REACT_APP_API_URL}/logout`)
                
                setUser({
                    isAuth: false,
                    user: null
                })
            }
            navigate('/')
        }

        logout()
    }, [])

    return null
}

export default Logout
