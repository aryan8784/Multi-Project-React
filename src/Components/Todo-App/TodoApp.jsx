import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import TodosInput from "./TodosInput";
import AllTodos from "./AllTodos";
import axios from "axios";

const TodoApp = () => {
  const [title, setTitle] = useState("Todo App Navbar");
  const [todos, setTodos] = useState(null);

  // use useEffect For data rendering and also (R) part of the CRUD operation

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3000/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  // create a function in hub components
  const addTodo = (data) => {
    // alert(data)
    // write the logic
    const payload = {
      title: data,
      id: Date.now(),
      status: false,
    };

    // we need to store payload in debugger.json
    axios
      .post("http://localhost:3000/todos", payload)
      .then((response) => {
        alert("Data Added successfully");
        // another get to get update  data
        getData();
      })
      .catch((error) => {
        alert("Error: " + error);
      });

    // // we need to update todos array
    // // setTodos

    // setTodos([...todos, payload]);
  };

  const handleUpdate = (id, status) => {
    axios
      .patch(`http://localhost:3000/todos/${id}`, { status: !status })
      .then((response) => {
        alert("Data updated Successfully");
        getData();
      });
  };

  const handleTodoDelete = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`).then((response) => {
      alert("Data Delete Successfully");
      getData();
    });
  };

  return (
    <>
      <div>
        {/* Navbar.jsx */}
        {/* <Navbar title={title} /> */}
        {/* TodosInput.jsx */}
        {/* yaha Add todo function ko pass kry gy as props */}
        <TodosInput addTodo={addTodo} />
        {/* AllTodos.jsx */}
        <AllTodos
          todos={todos}
          handleUpdate={handleUpdate}
          handleTodoDelete={handleTodoDelete}
        />
      </div>
    </>
  );
};

export default TodoApp;
