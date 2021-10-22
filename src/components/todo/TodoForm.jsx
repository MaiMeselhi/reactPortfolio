import { useState } from "react";
import "./TodoForm.css"
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div >
      <h3 className="text-start mb-4 pt-5">Todo</h3>
      <form  className="form" onSubmit={handleSubmission}>
        <label className="py-3">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="py-3">Content</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="my-4 btn  px-4 pt-1" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
