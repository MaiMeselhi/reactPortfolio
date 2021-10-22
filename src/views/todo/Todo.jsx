import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import { addTodoAction } from "../../redux/todo";

function Todo() {
  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {
    //  setTodos(todos.filter((todo,i) => i !== index))
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState} />
    </div>
  );
}

export default Todo;
