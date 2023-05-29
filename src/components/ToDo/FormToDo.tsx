import { addToDo, updateToDo } from "../../store/slices/ToDoSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { IFormTodo, IToDo } from "../../interfaces/Todo";

interface Props {
    type: string | null,
    id: number | null,
    setFormToDo: (param: IFormTodo) => void
}

const FormToDo = ({ type, id, setFormToDo }: Props) => {
    const dispatch = useAppDispatch();

    const [isSelected, setIsSelected] = useState<boolean>(false);

    const toDos = useAppSelector((state) => state.toDo.data)

    const toDo = toDos?.find((toDo: IToDo) => toDo.id === id)

    const isUpdateTodo = type === "UPDATE"

    const initialForm = {
        id: null,
        userId: null,
        title: `${isUpdateTodo ? toDo?.title : ""}`,
        completed: `${isUpdateTodo ? toDo?.completed : false}`
    }

    const [newToDo, setNewToDo] = useState(initialForm);

    const { title } = newToDo;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type === "CREATE") {
            dispatch(addToDo({ ...newToDo, completed: isSelected }));
        }
        if (type === "UPDATE") {
            dispatch(updateToDo({ ...toDo, title: newToDo.title, completed: isSelected, id }))
        }
        setFormToDo({ isOpen: false, type: null, id: null });
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
        setIsSelected(e.target.value === "true");
    };

    const closeEditAddModal = (e: any) => {
        e.preventDefault();
        setFormToDo({ isOpen: false, type: null, id: null })
    }

    return (
        <div className="flex flex-col h-screen justify-center bg-slate-200 items-center">
            <form
                onSubmit={handleSubmit}
                className="w-1/2 h-2/4 p-8 flex flex-col items-center justify-center shadow-2xl bg-white border-b-4 border-r-2 border-gray-300">

                <h2 className="text-gray-900 p-6 text-2xl font-semibold">
                    {isUpdateTodo ?
                        `Update ToDo with Id: ${id}`
                        : "Create a New ToDo"
                    }
                </h2>

                <div className="flex p-6 w-full flex-wrap justify-center items-center gap-6 ">
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

                <div className="flex p-6 w-full flex-wrap justify-center items-center gap-2 ">
                    <label className="text-gray-900">
                        Status:
                    </label>
                    <div className="w-3/4 flex gap-4 justify-center items-center">
                        <div className="flex flex-col gap-y-2">
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
                        <div className="flex flex-col gap-y-2">
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

                <div className="pt-12 px-8 text-sm flex justify-between w-full">
                    <button
                        onClick={closeEditAddModal}
                        className="py-2 px-4 bg-red-500  text-white rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 bg-green-500 text-white rounded-lg"
                    >
                        {type}
                    </button>
                </div>
            </form >
        </div>
    );
}

export default FormToDo;