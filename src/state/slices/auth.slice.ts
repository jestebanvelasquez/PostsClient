import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState{
    accessToken: string | null
    session: boolean
}

const initialState : AuthState = {
    accessToken: null,
    session: false,
}

 const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccessToken: (state, action:PayloadAction< string | null >) => {
            state.accessToken = action.payload
        },
        setSession: (state, action) => {
            state.session = action.payload
        }
    }

})


export const { setAccessToken, setSession } = authSlice.actions
export default authSlice.reducer;