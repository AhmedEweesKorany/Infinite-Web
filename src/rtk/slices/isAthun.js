import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = localStorage.getItem("isAuthenticated") === "true" ? true : false;

const isAuth = createSlice({
    initialState: initialAuthState,
    name: "AuthSlice",
    reducers: {
        Auth: (state) => {
            localStorage.setItem("isAuthenticated", "true");
            return true;
        },
        notAuth: (state) => {
            localStorage.setItem("isAuthenticated", "false");
            return false;
        },
    },
});

export const { Auth, notAuth } = isAuth.actions;

export default isAuth.reducer;
