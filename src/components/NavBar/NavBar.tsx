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
        <div className="bg-white py-2 flex flex-wrap text-gray-800 items-center justify-center gap-8 px-8 shadow-b-xl text-xs sm:text-md md:text-lg">
            <div className="mx-12">
                <p>Hello {user?.username}!</p>
            </div>
            <h4 className="mt-1 text-indigo-500">Total ToDos: {data.length}</h4>
            <h4 className="mt-1 text-red-500">Status ToDo: {data.length - completedToDos.length}</h4>
            <h4 className="mt-1 text-green-500">Status Completed: {completedToDos.length}</h4>
            <button
                onClick={handleExit}
                className="bg-red-500 w-16 p-3 mx-1 rounded-full text-white hover:bg-red-700">
                {"Exit"}
            </button>
        </div >);
}

export default NavBar;