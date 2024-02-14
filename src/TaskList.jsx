import { TodoItem } from "./TaskItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  //renders the list of todo item components
  return (
    <ul className="list">
      {todos.length === 0 && "No Tasks "}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}