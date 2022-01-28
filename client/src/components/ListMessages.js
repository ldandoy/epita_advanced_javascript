import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useRecoilState } from "recoil"
import {FaPencilAlt} from 'react-icons/fa'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import messagesState from '../atoms/messagesAtom'
import userState from "../atoms/userAtom"
import DeleteMessages from '../components/DeleteMessages'

const ListMessages = () => {
    const [{user}, setUser] = useRecoilState(userState)
    const [messages, setMessages] = useRecoilState(messagesState)
    dayjs.extend(relativeTime)

    const getData = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/messages`, {
            withCredentials: true
        })
        setMessages(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className='pt-40 w-50 mx-auto'>
        {messages.map(message => <div key={message._id} className='card mb-10 relative'>
            {message.picture && <div className='card-image'>
                <img src={`${message.picture}`} alt="Message" />
            </div>}

            <div className='card-body'>
                {message.autor._id === user._id && <>
                    <Link to={`/messages/${message._id}/edit`} className='edit'><FaPencilAlt /></Link>
                    <DeleteMessages message={message} />
                </>}
                <p>{message.content}</p>
                <p className='txt-small txt-right'>-- {dayjs(message.created_at).fromNow(true)} by {message.autor.username}</p>
            </div>
        </div>)}
    </div>
};

export default ListMessages;
