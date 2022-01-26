import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from "recoil"

import messagesState from '../atoms/messagesAtom'

const FormMessages = () => {
    let navigate = useNavigate()
    const [messages, setMessages] = useRecoilState(messagesState)
    const [form, setForm] = useState({ content: '', picture: '' })

    const handlerSubmit = async (event) => {
        event.preventDefault()

        console.log(form)

        var formData = new FormData()
        formData.append('content', form.content)
        formData.append('picture', form.picture)

        console.log(formData)

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/messages`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        console.log(res.data)
        setMessages([...messages, res.data])
        setForm({ content: '', picture: null })
    }

    const handlerOnChange = async (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const handlerOnChangeImage = async (event) => {
        const target = event.target
        const files = target.files

        if (files) {
            const file = files[0]
            setForm({...form, picture: file})
        }
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
        <div className='form-group'>
            <input type="file" name="picture" onChange={handlerOnChangeImage} />
        </div>
        <div className="form-group">
            <button className="btn bg-red-400 txt-white w-100">
                    Create the message
            </button>
        </div>
    </form>
};

export default FormMessages;
