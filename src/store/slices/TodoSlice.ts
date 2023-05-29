
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IFetchTodos, IToDo } from "../../interfaces/Todo";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchToDos = createAsyncThunk(
    "toDo/fetch",
    async () => {
        const response = await fetch(apiUrl, {
            method: "GET",
        });
        const data = response.json();
        return data;
    },
);

const initialState: IFetchTodos = {
    data: []
}

const generateNextId = (array: IToDo[]) => {
    const sortData = array?.sort((a: any, b: any) => b.id - a.id)
    return sortData[0].id + 1;
}

export const ToDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const { data } = state;
            const sortData = [...data];
            const newId = generateNextId(sortData)
            const newToDo = { ...action.payload, id: newId }
            state.data.push(newToDo)
        },

        deleteToDo: (state, action) => {
            const { data } = state
            const toDo = data.find((toDo: IToDo) => toDo.id === action.payload);
            if (toDo) {
                data.splice(data.indexOf(toDo), 1);
            }
        },
        updateToDo: (state, action) => {
            const { data } = state
            const { id, completed, title } = action.payload;
            const toDo = data.find((toDo: IToDo) => toDo.id === id);
            if (toDo) {
                toDo.title = title;
                toDo.completed = completed;
            }
        },
        reset: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchToDos.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})


export const { addToDo, deleteToDo, updateToDo, reset } = ToDoSlice.actions;

export default ToDoSlice.reducer;

