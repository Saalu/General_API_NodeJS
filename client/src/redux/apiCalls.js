import { updateStart,updateError,updateSuccess } from "./userSlice";
import axios from 'axios'

// https://jsonplaceholder.typicode.com/users

// http://localhost:5500/home
// http://localhost:5500/api/users/34/update

export const updateUser = async(user, dispatch) => {
    dispatch(updateStart())

    try {
        const res  = await axios.post('https://jsonplaceholder.typicode.com/users', user)
        dispatch(updateSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }

    

}
export const getUsers = async(user, dispatch) => {
    dispatch(updateStart())

    try {
        const res  = await axios.post('https://jsonplaceholder.typicode.com/users', user)
        dispatch(updateSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }

    

}