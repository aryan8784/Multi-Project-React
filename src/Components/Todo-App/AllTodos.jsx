import React from "react";
import SingleTodo from "../Todo-App/SingleTodo";

const AllTodos = ({todos,handleUpdate,handleTodoDelete}) => {
  return (
    <>
      {/* <div> */}
        <div>
         {
          todos?.map((todo)=> <SingleTodo key={todo.id} {...todo} handleUpdate={handleUpdate} handleTodoDelete={handleTodoDelete}/>)
         }
        </div>
      {/* </div> */}
    </>
  );
};

export default AllTodos;
