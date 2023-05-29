import { IFormTodo, IToDo } from '../../interfaces/Todo';
import { deleteToDo } from '../../store/slices/ToDoSlice';
import { useAppDispatch } from '../../store/store';

interface Props {
    toDo: IToDo,
    setFormToDo: (param: IFormTodo) => void
}

const ToDo = ({ toDo, setFormToDo }: Props) => {
    const dispatch = useAppDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteToDo(id));
    };
    const handleEdit = () => {
        setFormToDo({ isOpen: true, type: "UPDATE", id: toDo.id });
    };

    const todoElements = [
        <div className="flex items-center justify-center">
            <p className="text-gray-900">
                {toDo.id}
            </p>
        </div>,
        <span className="flex justify-center px-3 py-1 font-semibold text-xs sm:text-lg">
            {
                toDo.completed ?
                    <p className="xl:w-3/4 bg-green-700 p-1 text-green-100 rounded-xl"> COMPLETED </p> :
                    <p className="bg-red-400 p-1 text-slate-50 rounded-xl"> TODO </p>
            }
        </span >,
        <p className="text-xs sm:text-lg lg:text-xl">
            {toDo.title}
        </p>,
        <div>
            <button className="bg-yellow-400 p-2 mx-1 rounded-md hover:bg-yellow-200"
                onClick={handleEdit}>
                Edit
            </button>
            <button
                className="bg-red-500 text-white p-2 mx-1 rounded-md hover:bg-red-700"
                onClick={() => handleDelete(toDo.id)}>
                Delete
            </button>
        </div>
    ]

    return (
        <tr key={toDo.id} >
            {
                todoElements.map((td, i) =>
                    <td key={i} className="text-center p-2 text-sm bg-white border-b border-gray-200">
                        {td}
                    </td>)
            }
        </tr>
    );
}
export default ToDo;