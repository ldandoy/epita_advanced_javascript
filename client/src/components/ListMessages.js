import React, {useEffect} from 'react'
import axios from 'axios'
import { useRecoilState } from "recoil"
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import messagesState from '../atoms/messagesAtom'
import DeleteMessages from '../components/DeleteMessages'

const ListMessages = () => {
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
                <DeleteMessages message={message} />
                <p>{message.content}</p>
                <p className='txt-small txt-right'>-- {dayjs(message.created_at).fromNow(true)}</p>
            </div>
        </div>)}
    </div>
};

export default ListMessages;
