import { useDispatch } from 'react-redux';
import { deleteToDo } from '../../store/slices/ToDoSlice';


const ToDo = (props: any) => {
    const dispatch = useDispatch();

    const { toDo, setAddEditToDo } = props;

    const handleDelete = (id: any) => {
        dispatch(deleteToDo(id));
    };
    const handleEdit = (id: any) => {
        setAddEditToDo({ isOpen: true, type: "UPDATE", id: toDo.id });
    };


    return (
        <>
            <tr key={toDo.id}>
                <td className="p-2 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center justify-center">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {toDo.id}
                        </p>
                    </div>
                </td>
                <td className="p-2 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span className={`absolute inset-0 ${toDo.completed ? "bg-green-200 " : "bg-red-300 "} rounded-full opacity-50`}>
                        </span>
                        <span className="relative">
                            {
                                toDo.completed ?
                                    <p className="text-green-500"> COMPLETED </p> :
                                    <p className="text-red-500"> TODO </p>
                            }
                        </span>
                    </span>
                </td>
                <td className="p-2 text-sm bg-white border-b border-gray-200">
                    <p>
                        {toDo.title}
                    </p>
                </td>

                <td className="p-2 text-sm bg-white border-b border-gray-200 gap-4">
                    <button className="bg-yellow-400 p-2 mx-1 rounded-md"
                        onClick={() => handleEdit(toDo.id)}>
                        Edit
                    </button>
                    <button
                        className="bg-red-400 p-2 mx-1 rounded-md"
                        onClick={() => handleDelete(toDo.id)}>
                        Delete
                    </button>
                </td>
            </tr>

        </>

    );
}

export default ToDo;