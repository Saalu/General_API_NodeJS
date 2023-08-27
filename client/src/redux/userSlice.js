import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const updateUser2 = createAsyncThunk('users/update', async(user) =>{
  const res  = await axios.post('https://jsonplaceholder.typicode.com/users', user)
       
  return res.data
})


export const userSlice = createSlice({
    name: 'user',
    initialState: {
      userInfo:{
        name: 'Admin',
        email: 'saalu@teck.com'
      }
      ,
    pending: false,
    error: false,
    },

    // =====================Custom============//
    // reducers: {
    //     updateStart: (state,action) =>{
    //         state.pending = true
    //     },
    //     updateSuccess: (state,action) => {
    //         state.pending = false,
    //         state.userInfo= action.payload
    //     },
    //     updateError: (state,action) =>{
    //         state.pending = false,
    //         state.error = true
    //     },   
    // },

    extraReducers:{
      [updateUser2.pending]: (state) =>{
        state.pending = true
        state.error = false
      },
      [updateUser2.fulfilled]: (state,action) =>{
        state.pending = false
        state.userInfo = action.payload
      },
      [updateUser2.rejected]: (state) =>{
        state.pending = null,
        state.error = true
      },
    }
    // =====================Extra============//
    // extraReducers: (builder) => {
    //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //     state.entities = action.payload.users
    //     state.ids = Object.keys(action.payload.users)
    //   })
    // },
  })


  export const {updateStart,updateSuccess,updateError} = userSlice.actions

  export default userSlice.reducer