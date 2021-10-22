import "./TodoList.css"

const TodoList = ({ todos,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="item border d-flex">
            <div className="text">
              <p >Title : {todo.title}</p>
              <p class=" ps-5">Content : {todo.content}</p>
              <button onClick={deleteTodo} class="delete">Delete Todo</button>
            </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">Nothing To DO ..</p>
    );

  return (
    <div className="text-center content">
      <h5 className=" my-2 text-center">Todos</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
