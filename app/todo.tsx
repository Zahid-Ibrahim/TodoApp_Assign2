"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    
    { todoText: "Javascript", completed: false },
    { todoText: "Typescript", completed: false },
    { todoText: "React JS", completed: true },
    { todoText: "Next.JS", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; 
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <div>  Todo Application----Zahid Ibrahim </div>
      <br></br>
      <br></br>
      <input
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "orange",
                fontStyle: "oblique",
                listStyle: "none",
                    }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                               }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}