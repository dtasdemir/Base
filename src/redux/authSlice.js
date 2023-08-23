import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginUser = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        console.log(credentials);
        const response = await auth().signInWithEmailAndPassword(credentials.email, credentials.password);
        
        console.log(response);

        console.log(response.user._user);
       if(response) {
        AsyncStorage.setItem('Base::user', JSON.stringify(credentials));
        return response.user._user;
       }

    }
)

export const Logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await auth().signOut();

        AsyncStorage.removeItem('Base::user');
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData : [],
        isLoad: false,
        isErr: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(LoginUser.pending, state => {
                state.isLoad = true;
                state.isErr = null;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.isLoad = false;
                state.userData = action.payload;
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.isLoad = false;
                state.isErr = action.error.message;
            })
            .addCase(Logout.fulfilled, state => {
                state.userData = [];
            })
    }
})


export default authSlice.reducer;