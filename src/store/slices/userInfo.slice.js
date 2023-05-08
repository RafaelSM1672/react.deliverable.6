import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from '../utils/configAxios'

const initialState = {
    token: "",
    user: null,
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const newState = {...state, ...action.payload};
            return newState
        }
    },
})

export const { setUserInfo } = userInfoSlice.actions; 

export const loginUser = (data) => () => {
    axiosEcommerce.post("users/login", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
}

export default userInfoSlice.reducer;