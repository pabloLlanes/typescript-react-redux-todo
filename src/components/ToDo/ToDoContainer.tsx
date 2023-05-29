import { useState } from "react";
import TodoList from "./TodoList";
import { ToDoForm } from ".";
import { IFormTodo } from "../../interfaces/Todo";


const ToDoContainer = () => {

  const [configToDoForm, setConfigToDoForm] = useState<IFormTodo>({ isOpen: false, type: "CREATE", id: null });

  const handleAdd = () => {
    setConfigToDoForm({ isOpen: true, type: "CREATE", id: null });
  };

  return (
    <>
      {configToDoForm.isOpen ?
        <ToDoForm type={configToDoForm.type} id={configToDoForm.id} setFormToDo={setConfigToDoForm} />
        :
        <TodoList handleAdd={handleAdd} setFormToDo={setConfigToDoForm} />
      }
    </>
  );
};

export default ToDoContainer;
