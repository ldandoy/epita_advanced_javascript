import React, {useState} from 'react'
import axios from 'axios'
import {useRecoilState} from 'recoil'
import {Link, useNavigate} from 'react-router-dom'

import userState from '../atoms/userAtom'

const LoginForm = () => {
    let navigate = useNavigate()
    const [user, setUser] = useRecoilState(userState)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handlerOnChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    const handlerOnSubmit = async (event) => {
        event.preventDefault()

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, form, {
                withCredentials: true
            })

            setUser({
                isAuth: true,
                user: res.data.user
            })

            navigate('/')
        } catch(error) {
            console.error(error.response.data)
        }
    }

    return (
        <form className="form-bordered w-50 mx-auto" onSubmit={handlerOnSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor='email'>Your email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder='Enter your email'
                    onChange={handlerOnChange}
                    required={true}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor='password'>Your password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder='Enter your password'
                    onChange={handlerOnChange}
                    required={true}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <button className='btn bg-red-400 txt-white w-100' type='submit'>Login</button>
            </div>
            <div className="form-group txt-center txt-small">
                <Link to="/register">Don't have any account ?</Link>
            </div>
        </form>
    )
}

export default LoginForm
