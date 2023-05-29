export interface IFetchTodos {
    data: IToDo[]
}

export interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IFormTodo {
    isOpen: boolean,
    type: string | null,
    id: number | null
}

