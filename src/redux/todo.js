import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO ="DELETE_TODO"
//action
export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodoAction = key => {
  return {
    type:DELETE_TODO,
    payload:key,
  };
};
//state

const initialState = {
  todos: [
    {
      title: "drink",
      content: "drink coffee at 6 Am.",
    },
    {
      title: "read",
      content: "read Arabic novels.",
    },
  ],
};

//reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos:state.todos.filter((todo,i) => i !== action.payload) };
    default:
      return state;
  }
};

//store
export const store = createStore(todoReducer);
