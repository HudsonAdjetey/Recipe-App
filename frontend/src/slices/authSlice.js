import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null,
    data: []
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            sessionStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        clearCredentials: (state, action) => {
            state.userInfo = null
            sessionStorage.removeItem('userInfo')
        },
        createDish: (state, action)=> {
            state.data.push(action.payload)
        }    
    }
})


export const { setCredentials, clearCredentials } = authSlice.actions


export default authSlice.reducer