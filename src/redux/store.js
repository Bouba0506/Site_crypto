import { configureStore } from "@reduxjs/toolkit";
import { crypto } from "../Services/CryptoApi";

export default configureStore({
    reducer:{[crypto.reducerPath]:crypto.reducer},
})