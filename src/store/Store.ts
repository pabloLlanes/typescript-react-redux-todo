import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { UserSlice } from "./slices/UserSlice";
import { TodoSlice } from "./slices/TodoSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        todo: TodoSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;