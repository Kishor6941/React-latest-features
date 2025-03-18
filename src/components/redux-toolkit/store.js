import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

let store = configureStore({
    reducer: {
        todoSlice : todoSlice
    }
});

export default store;