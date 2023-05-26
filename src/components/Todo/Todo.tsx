const Todo = (props: any) => {

    const { todo } = props;

    return (
        <div key={todo.id} className="flex py-8 px-6 m-4 flex-wrap justify-between bg-black">
            <p>{todo.id} - {todo.title}</p>
            {
                todo.completed ?
                    <p className="text-green-500"> COMPLETED </p> :
                    <p className="text-red-500"> INCOMPLETED </p>
            }
        </div>
    );
}

export default Todo;