import {atom} from 'recoil'

const messagesState = atom({
    key: 'messagesState',
    default: [],
})

export default messagesState