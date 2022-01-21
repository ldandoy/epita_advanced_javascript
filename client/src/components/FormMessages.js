import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormMessages = () => {
    let navigate = useNavigate()
    const [form, setFrom] = useState({ content: '' })

    const handlerSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/messages`, form, {
            withCredentials: true
        })
        console.log(res.data)
        navigate('/messages')
    }

    const handlerOnChange = async (event) => {
        const {name, value} = event.target
        setFrom({...form, [name]: value})
    }

    return <form onSubmit={handlerSubmit} className="w-50 mx-auto form-bordered">
        <div className="form-group">
            <textarea
                name="content"
                value={form.content}
                placeholder='Add your message here'
                className="form-textarea"
                onChange={handlerOnChange}
            ></textarea>
        </div>
        <div className="form-group">
            <button className="btn bg-red-400 txt-white w-100">
                    Create the message
            </button>
        </div>
    </form>
};

export default FormMessages;
