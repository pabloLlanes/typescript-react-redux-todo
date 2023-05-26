import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: "",
    password: ""
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logInUser: (state, action) => {
            const { username, password } = action.payload;
            state.username = username;
            state.password = password;
        },
        logOutUser: (state, action) => {
            state.username = "";
            state.password = "";
        },
    }
})

export const { logInUser, logOutUser } = UserSlice.actions;
export default UserSlice.reducer;