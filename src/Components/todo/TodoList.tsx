import { useContext } from "react";
import TodoProvider, { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext)
    console.log(state);

    return (
        <div>
            {
                state.map((task: TTodo, i) => <p
                    key={task.id}
                    className={`cursor-pointer ${task.isCompleted ? 'line-through' : ''}`}
                    onClick={() => dispatch({ type: 'taskCompleted', payload: task.id })}
                >{task.title}</p>)
            }
        </div>
    );
};

export default TodoList;