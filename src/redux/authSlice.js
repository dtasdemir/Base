import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigation/RootNavigation';

export const LoginUser = createAsyncThunk('auth/login', async credentials => {
  const response = await auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  );

  if (response) {
    navigate({NavigatorName: 'tab'});

    AsyncStorage.setItem('Base::user', JSON.stringify(credentials));

    AsyncStorage.setItem(
      'Base::userId',
      JSON.stringify(response.user._user.uid),
    );

    return response.user._user;
  }
});

export const Logout = createAsyncThunk('auth/logout', async () => {
  await auth().signOut();

  AsyncStorage.removeItem('Base::user');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: [],
    uid: null,
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
        state.uid = action.payload.uid;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoad = false;
        state.isErr = action.error.message;
      })
      .addCase(Logout.fulfilled, state => {
        state.userData = [];
        state.uid = null;
      });
  },
});

export default authSlice.reducer;
