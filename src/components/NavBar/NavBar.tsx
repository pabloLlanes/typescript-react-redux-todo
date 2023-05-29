import { useAppDispatch } from "../../store/store";
import { logOutUser } from "../../store/slices/UserSlice";
import { useAppSelector } from "../../store/store";
import { IToDo } from "../../interfaces/Todo";

const NavBar = () => {
    const user = useAppSelector((state) => state.user);

    const toDos = useAppSelector((state) => state.toDo);

    const { data } = toDos;

    const completedToDos = data.filter((toDo: IToDo) => toDo.completed === true);

    const dispatch = useAppDispatch()

    const handleExit = () => {
        dispatch(logOutUser(false))
    }
    return (
        <div className="h-14 w-full bg-white flex flex-wrap text-gray-800 items-center justify-end gap-8 px-8 shadow-b-xl">
            <div className="mx-12">
                <p>Hello {user?.username}!</p>
            </div>
            <p className="mt-1 text-indigo-500">Total ToDos: {data.length}</p>
            <p className="mt-1 text-red-500">Status ToDo: {data.length - completedToDos.length}</p>
            <p className="mt-1 text-green-500">Status Completed: {completedToDos.length}</p>

            <button
                onClick={handleExit}
                className="bg-red-400 w-16 p-2 mx-1 rounded-full text-white">
                {"Exit"}
            </button>
        </div >);
}

export default NavBar;