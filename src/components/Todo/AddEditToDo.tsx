import { useDispatch, useSelector } from "react-redux";
import { addToDo, updateToDo } from "../../store/slices/ToDoSlice";
import { useState } from "react";

const AddEditToDo = (props: any) => {
    const dispatch = useDispatch();

    const { type, id, setAddEditToDo } = props;
    const [isSelected, setIsSelected] = useState(false);
    const toDos = useSelector((state: any) => state.toDo.data)

    const toDo = toDos.find((todo: any) => todo.id === id)

    const isUpdateTodo = type === "UPDATE"
    const initialForm = {
        userId: null,
        title: `${isUpdateTodo ? toDo.title : ""}`,
        completed: `${isUpdateTodo ? toDo.completed : ""}`
    }

    const [newToDo, setNewToDo] = useState(initialForm);


    const { title } = newToDo;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (type === "CREATE") {
            dispatch(addToDo({ ...newToDo, completed: isSelected }));
        }
        if (type === "UPDATE") {
            console.log(toDo);
            dispatch(updateToDo({ ...toDo, title: newToDo.title, completed: isSelected, id }))
        }
        setAddEditToDo(false);
    };
    const handleInputChange = (field: any) => {
        return (e: any) => {
            setNewToDo((prev) => ({
                ...prev,
                [field]: e.target.value
            }));
        };
    };

    const handleSelectionChange = (e: any) => {
        setIsSelected(e.target.value === 'true');
    };
    const closeEditAddModal = (e: any) => {
        e.preventDefault();
        setAddEditToDo({ isOpen: false, type: null, id: null })
    }

    return (

        <form
            className="sm:w-1/2 p-6 mt-32 bg-white rounded shadow-xl h-full"
            onSubmit={handleSubmit}
        >
            <h2 className="text-gray-900 p-4 text-lg font-semibold">

                {isUpdateTodo ?
                    `Update ToDo ID: ${id}`
                    : "Create a New ToDo"
                }
            </h2>



            <div className="flex p-4 flex-wrap justify-between items-center">
                <label className="text-gray-900">
                    Title:
                </label>
                <input
                    className="border-2 w-3/4"
                    placeholder=" Insert title... "
                    value={title}
                    onChange={handleInputChange("title")}
                />
            </div>

            <div className="p-4 text-sm">
                <div className="flex flex-wrap justify-between items-center">
                    <label className="text-gray-900">
                        Status:
                    </label>
                    <div className="w-3/4 flex gap-4 justify-around">
                        <div>
                            <p>
                                Todo
                            </p>
                            <input
                                type="radio"
                                value="false"
                                checked={!isSelected}
                                onChange={handleSelectionChange}
                            />
                        </div>
                        <div>
                            <p>
                                Completed
                            </p>
                            <input
                                type="radio"
                                value="true"
                                checked={isSelected}
                                onChange={handleSelectionChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-12 px-8 text-sm flex justify-between">
                <button
                    onClick={closeEditAddModal}
                    className="py-2 px-4 bg-blue-400 rounded-lg"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-400 rounded-lg"
                >
                    {type}
                </button>

            </div>

        </form>
    );
}

export default AddEditToDo;