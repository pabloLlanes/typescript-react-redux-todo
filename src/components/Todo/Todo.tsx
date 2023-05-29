import { IToDo } from '../../interfaces/Todo';
import { deleteToDo } from '../../store/slices/ToDoSlice';
import { useAppDispatch } from '../../store/store';
import { IFormTodo } from './TodoList';

interface Props {

    toDo: IToDo,
    setFormToDo: (param: IFormTodo) => void
}

const ToDo = (props: Props) => {
    const dispatch = useAppDispatch();

    const { toDo, setFormToDo } = props;

    const handleDelete = (id: number) => {
        dispatch(deleteToDo(id));
    };
    const handleEdit = () => {
        setFormToDo({ isOpen: true, type: "UPDATE", id: toDo.id });
    };
    const todoElements = [
        <div className="flex items-center justify-center">
            <p className="text-gray-900 whitespace-no-wrap">
                {toDo.id}
            </p>
        </div>,
        <span className="relative inline-block px-3 py-1 font-semibold  text-green-900">
            <span className={`absolute inset-0 ${toDo.completed ? "bg-green-200 " : "bg-red-300 "} rounded-full opacity-50`}>
            </span>
            <span className="relative">
                {
                    toDo.completed ?
                        <p className="text-green-500"> COMPLETED </p> :
                        <p className="text-red-500"> TODO </p>
                }
            </span>
        </span>,
        <p>
            {toDo.title}
        </p>,
        <div className="">
            <button className="bg-yellow-400 p-2 mx-1 rounded-md"
                onClick={handleEdit}>
                Edit
            </button>
            <button
                className="bg-red-400 p-2 mx-1 rounded-md"
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