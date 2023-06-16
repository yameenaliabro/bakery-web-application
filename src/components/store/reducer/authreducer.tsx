//@ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/Api";
export const signinuser = createAsyncThunk(
    "user/signin",
    async ({ email, password }: { email: string, password:string }) => {
        const result = api.post("auth/login", {
            email,
            password
        })
        return (await result).data
    }
)
export const createUser = createAsyncThunk(
    "user/signup",
    async ({ username, email, password }: { username: string, email: string, password: string }) => {
        return await api.post("/auth/signup", {
            username,
            email,
            password
        });
    }
);
export const logooutuser = createAsyncThunk("user/logout", async () => { })
export const checkinuserAuthenticated = createAsyncThunk(
    "user/authenticated",
    async () => {

    }
)
const initialState = {
    isAuthenticated: false,
    isLoading: false,
};
export const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOutUser: (state) => initialState
    },
    extraReducers: ({ addCase }) => {
        //Login User
        addCase(signinuser.pending, (state, action) => {
            state.isLoading = true
        });
        addCase(signinuser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
        })
        addCase(signinuser.rejected, (state, action) => {
            state.isAuthenticated = false
            state.isLoading = false
        })
        //Create User
        addCase(createUser.pending, (state, action) => {
            state.isLoading = true
        })
        addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true
        })
        addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
        })
        //Logout User 
        addCase(logooutuser.pending, (state, action) => {
            state.isLoading = true
        })
        addCase(logooutuser.fulfilled, (state, action) => {
            state.isAuthenticated = false
            state.isAuthenticated = false
        })
        addCase(logooutuser.rejected, (state, action) => {
            state.isLoading = false
        });
        // Check User Authenticated
        addCase(checkinuserAuthenticated.pending, (state, action) => {
            state.isLoading = true
        })
        addCase(checkinuserAuthenticated.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = true

        })
        addCase(checkinuserAuthenticated.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})
export default authslice.reducer
export const { signOutUser }  = authslice.actions