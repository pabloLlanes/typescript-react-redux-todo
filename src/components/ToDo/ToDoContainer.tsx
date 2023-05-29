import { useState } from "react";
import TodoList from "./TodoList";
import { FormToDo } from ".";
import { IFormTodo } from "../../interfaces/Todo";


const ToDoContainer = () => {

  const [formToDo, setFormToDo] = useState<IFormTodo>({ isOpen: false, type: "CREATE", id: null });

  const handleAdd = () => {
    setFormToDo({ isOpen: true, type: "CREATE", id: null });
  };

  return (
    <>
      {formToDo.isOpen ?
        <FormToDo type={formToDo.type} id={formToDo.id} setFormToDo={setFormToDo} />
        :
        <TodoList handleAdd={handleAdd} setFormToDo={setFormToDo} />
      }
    </>
  );
};

export default ToDoContainer;
