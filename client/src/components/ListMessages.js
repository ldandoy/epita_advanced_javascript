import React, {useEffect} from 'react';
import axios from 'axios';
import { useRecoilState } from "recoil"

import messagesState from '../atoms/messagesAtom'
import DeleteMessages from '../components/DeleteMessages'

const ListMessages = () => {
    const [messages, setMessages] = useRecoilState(messagesState)

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
            <div className='card-body'>
                <DeleteMessages message={message} />
                <p>{message.content}</p>
                <p className='txt-small txt-right'>-- {message.autor.username}</p>
            </div>
        </div>)}
    </div>
};

export default ListMessages;
