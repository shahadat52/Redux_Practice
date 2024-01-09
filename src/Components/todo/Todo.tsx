import { FormEvent, useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoProvider';
const Todo = () => {
    const { state, dispatch } = useContext(TodoContext)
    const [task, setTask] = useState('')
    const todo = {
        id: Math.floor(10000000 + Math.random() * 90000000),
        title: task,
        isCompleted: false
    }
    console.log({ todo });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch({type: 'addTodo', payload: todo})

    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}>
                <input
                    onBlur={(e) => setTask(e.target.value)}
                    className="border-sky-500 mt-5"
                    type="text"
                    name="My Todo"
                    placeholder="Name"
                /><br />

                <input className="flex flex-auto" type="submit" name="hobbies" placeholder="Submit" /><br />

            </form>
        </div>
    );
};

export default Todo;