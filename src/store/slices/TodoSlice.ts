
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"



const initialState: any = {
    data: []
}
const url = "https://jsonplaceholder.typicode.com/todos";


export const fetchTodos = createAsyncThunk(
    "todo/fetch",
    async () => {
        const response = await fetch(url, {
            method: "GET",
        });
        const data = response.json();
        return data;
    },
);


export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction) => {
            return action.payload
        },
        reset: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            console.log(action.payload)
            state.data = action.payload;
        })
    }
})


export default TodoSlice.reducer;

export const { addTodo, reset } = TodoSlice.actions;
