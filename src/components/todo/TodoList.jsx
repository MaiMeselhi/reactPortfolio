import "./TodoList.css"

const TodoList = ({ todos,id,deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="item border d-flex">
            <div className="text">
              <p >Title : {todo.title}</p>
              <p className=" ps-5">Content : {todo.content}</p>
              <p onClick={() => deleteTodo(i)} className="delete">X</p>
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
      {todosList}
    </div>
  );
};

export default TodoList;
