import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'auth/login',
  async (param, thunkAPI) => {
    try {

      return {}

    } catch (error) {

      return {}

    }
  })

export const registration = createAsyncThunk(
  'auth/registration',
  async (param, thunkAPI) => {
    try {

      return {}

    } catch (error) {

      return {}

    }
  })

const slice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    action: (state, action: PayloadAction<{}>) => {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<{}>) => {

    })
    builder.addCase(registration.fulfilled, (state, action: PayloadAction<{}>) => {

    })
  }
})


export const authReducer = slice.reducer
export const {} = slice.actions