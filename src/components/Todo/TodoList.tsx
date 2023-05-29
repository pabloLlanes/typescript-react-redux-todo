import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import ToDo from "./ToDo";
import { fetchToDos } from "../../store/slices/ToDoSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { IToDo } from "../../interfaces/Todo";

export interface IFormTodo {
    isOpen: boolean,
    type: string | null,
    id: number | null
}

interface Props {
    handleAdd: () => void;
    setFormToDo: (param: IFormTodo) => void
}

const TodoList = (props: Props) => {
    const { handleAdd, setFormToDo } = props;

    const theads = ["Id", "Status", "Title"];

    const dispatch = useAppDispatch();

    const toDos = useAppSelector((state) => state.toDo.data);

    useEffect(() => {
        if (toDos.length === 0) {
            console.log('FETCHING ToDos.....')
            dispatch(fetchToDos())
        }
    }, [])

    const [page, setPage] = useState(0);

    const [perPage, setPerPage] = useState(10);

    const totalPages = Math.ceil(toDos?.length / perPage);

    const pagesVisited = page * perPage;

    const handlePagination = (updatePage: number) => setPage(updatePage);

    const handleSetPerPage = (qtyPerPage: number) => setPerPage(qtyPerPage);

    const displayToDos = toDos?.slice(pagesVisited, pagesVisited + perPage);

    return (
        <div className="flex flex-col h-full min-h-screen justify-center items-center bg-slate-200">
            <table className="px-4 py-4 w-5/6 mt-16">
                <thead>
                    <tr>
                        {theads.map((th, i) =>
                            <th key={i} className="bg-indigo-500 px-5 py-3 text-md text-center text-slate-100  border-b-2 border-purple-600 shadow-xl">
                                {th}
                            </th>)}
                        <th className="bg-indigo-500 px-5 py-3 text-center gap-2 border-b-2 border-purple-600 text-md shadow-xl">
                            <div className="flex items-center justify-between gap-6">
                                <button className="bg-green-400 w-24 py-3 mx-2 rounded-full border-emerald-400 border-l-emerald-400 shadow-xl"
                                    onClick={handleAdd}>
                                    Add ToDo+
                                </button>

                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        displayToDos?.map((toDo: IToDo) =>
                            <ToDo key={toDo.id} toDo={toDo} setFormToDo={setFormToDo} />
                        )
                    }
                </tbody>
            </table>

            <Pagination
                page={page}
                perPage={perPage}
                totalPages={totalPages}
                handleSetPage={handlePagination}
                handleSetPerPage={handleSetPerPage}
            />
        </div>);
}

export default TodoList;