import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import userInfo from "./slices/userInfo.slice";

export default configureStore({
    reducer: {
        userInfo,
        cart
    }
})
