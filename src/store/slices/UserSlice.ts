import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: "pablo",
    password: "gett",
    isLogging: false,
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInUser: (state, action) => {
            const { username, password } = action.payload;
            if (state.username === username &&
                state.password === password) {
                state.isLogging = true
            }
        },
        logOutUser: (state, action) => {
            state.isLogging = action.payload
        },
    }
})

export const { logInUser, logOutUser } = UserSlice.actions;

export default UserSlice.reducer;