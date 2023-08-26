import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: 'user',
    initialState: {
      user:{
        name: 'Admin',
        email: 'saalu@teck.com'
      }
    },
    pending: false,
    error: false,
    reducers: {
        update: (state,action) =>{
            state.name = action.payload.name
            state.email = action.payload.email
        },
        remove: (state) => state = {}
        
    },
    // extraReducers: (builder) => {
    //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //     state.entities = action.payload.users
    //     state.ids = Object.keys(action.payload.users)
    //   })
    // },
  })


  export const {update,remove} = userSlice.actions

  export default userSlice.reducer