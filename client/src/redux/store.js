import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSclice";


export const store=configureStore({
    reducer:{
        root:rootSlice
    }
})