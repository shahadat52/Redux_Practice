/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { TTodo, TodoContext, actionTypes } from "../../context/TodoProvider";

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext) as any
    console.log(state);

    return (
        <div>
            {
                state.map((task: TTodo) => <p
                    key={task.id}
                    className={`cursor-pointer ${task.isCompleted ? 'line-through' : ''}`}
                    onClick={() => dispatch({ type: actionTypes.TASK_COMPLETED, payload: task.id })}
                >{task.title}</p>)
            }
        </div>
    );
};

export default TodoList;