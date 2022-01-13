import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const LoginForm = () => {
    return (
        <div>
            LoginForm
            <div>
                <Link to="/register">Don't have any account ?</Link>
            </div>
        </div>
    )
}

export default LoginForm
