export interface FetchTodos {
    data: IToDo[]
}

export interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

