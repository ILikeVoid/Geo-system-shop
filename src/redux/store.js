import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice.js";
import inputsReducer from "./Slices/inputsSlice";


const store = configureStore({
        reducer: {
            user: userReducer,
            inputs: inputsReducer
        }
    }
)

export default store
