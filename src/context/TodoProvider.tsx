import { ReactNode, createContext, useReducer } from 'react'

export const TodoContext = createContext<{ state: string[], dispatch: React.Dispatch<TAction> } | undefined>(undefined)

type TodoProviderProps = {
    children: ReactNode
}
export type TTodo = {
    id: number;
    title: string;
    isCompleted: boolean;
}
type TAction = {
    type: string;
    payload: string
}

export const actionTypes = {
    ADD_TODO: 'addTodo',
    TASK_COMPLETED: 'taskCompleted'
}
const initialValue: string[] | undefined = []


const reducer = (currentState: string[], action: TAction): string[] => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...currentState, action.payload]
        case actionTypes.TASK_COMPLETED:
            return currentState.map((item )  => item.id === action.payload ? { ...item, isCompleted: !item.isCompleted } : item)


        default:
            return currentState
    }
}

const TodoProvider = ({ children }: TodoProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const values = {
        state,
        dispatch
    }
    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;