import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    status: null, // Add status to the initial state
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
            state.status = 'loggedIn'; // Update status
        },
        logout: (state) => {
            state.userData = null;
            state.status = 'loggedOut'; // Update status
        },
        setStatus: (state, action) => {
            state.status = action.payload; // For manually setting status
        },
    },
});

export const { login, logout, setStatus } = authSlice.actions;
export default authSlice.reducer;