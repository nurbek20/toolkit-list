import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, changeTodo,editTodo } from "../store/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleChangeTodo=(id)=>{
    dispatch(changeTodo(id));
  }

  const handleEditTodo = (id,text) => {
    console.log(id , text);
    dispatch(editTodo({id, text}));
  }


  return (
    <div>
      {todos.map((elem, i) => {
        return (
          <TodoItem
            handleToggleTodo={handleToggleTodo}
            removeTodo={removeTodo}
            handleChangeTodo={handleChangeTodo}
            handleEditTodo={handleEditTodo}
            {...elem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
