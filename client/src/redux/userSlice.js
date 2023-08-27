import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



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
  
    reducers: {
        updateStart: (state,action) =>{
            state.pending = true
        },
        updateSuccess: (state,action) => {
            state.pending = false,
            state.userInfo= action.payload
        },
        updateError: (state,action) =>{
            state.pending = false,
            state.error = true
        },
        
    },
    // extraReducers: (builder) => {
    //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //     state.entities = action.payload.users
    //     state.ids = Object.keys(action.payload.users)
    //   })
    // },
  })


  export const {updateStart,updateSuccess,updateError} = userSlice.actions

  export default userSlice.reducer