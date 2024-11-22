import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Slices/Userslice";

const Store=configureStore({
    reducer:{
        userinfo:UserReducer,
    },
})
export default Store;