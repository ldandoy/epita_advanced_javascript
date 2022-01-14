import {atom} from 'recoil'

const userState = atom({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: {
        isAuth: false,
        user: null
    }, // default value (aka initial value)
})

export default userState