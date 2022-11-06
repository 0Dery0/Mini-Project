import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: "user",
    initialState: {
        adminEmail : "admin@admin.com",
        userEmail : "user@user.com",
        data: []
    },
    reducers: {
        setUserData:(state, action) => {
            state.data = action.payload
            state.adminEmail = action.payload
            state.userEmail = action.payload
        }
    }
})

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;