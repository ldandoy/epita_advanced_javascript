import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useRecoilState } from "recoil"
import axios from 'axios'

import messagesState from '../atoms/messagesAtom'

const DeleteMessages = ({message}) => {
    const [messages, setMessages] = useRecoilState(messagesState)

    const handerOnClick = async () => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/messages/${message._id}`, {
                withCredentials: true
            })
            /*setAlert({
                type: "success",
                msg: res.data.msg
            })*/
            setMessages(messages.filter((messageItem) => messageItem._id !== message._id))
        }catch(err) {
            /*setAlert({
                type: "error",
                msg: err.message
            })*/
        }
    }

    return <div
        className='delete'
        onClick={handerOnClick}
    >
        <FaTrashAlt />
    </div>
};

export default DeleteMessages
