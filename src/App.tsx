// import CountPage from './Components/CountPage'

import Todo from "./Components/todo/Todo"
// import TodoList from "./Components/todo/TodoList"
import TodoProvider from "./context/TodoProvider"

// import FormWithUseReducer from './Components/FormWithUseReducer'
function App() {

  return (
    <>
      <TodoProvider>
        <Todo />
        {/* <TodoList /> */}
      </TodoProvider>
    </>
  )
}

export default App
