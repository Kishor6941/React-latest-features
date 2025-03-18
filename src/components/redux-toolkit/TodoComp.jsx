import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  clearAllTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from "./todoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoComp = () => {
  const [title, setTask] = useState("");
  const dispatch = useDispatch();
  const { todos,status } = useSelector((state) => state.todoSlice);

  console.log(status)
  const [id, setId] = useState("");

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, []);

  let todoAdd = () => {
    if (title === "") {
      alert("Please enter a task");
    } else if (id) {
      dispatch(updateTodo({ title, id }));
      setTask("");
      setId("");
    } else {
      dispatch(addTodo({ title, id: uuidv4() }));
      setTask("");
    }
  };

  let editTodo = (t) => {
    setTask(t.title);
    setId(t.id);
  };
  return (
    <div className="container mt-5 col-md-10">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">To-Do List</h4>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              id="taskInput"
              className="form-control"
              placeholder="Add a new task"
              value={title}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-outline-primary" onClick={todoAdd}>
              {id ? "Update Todo" : "Add Todo"}
            </button>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-outline-success"
              onClick={() => dispatch(fetchTodos())}
            >
              fetch Todos
            </button>
            <button
              className="btn btn-outline-danger m-3"
              onClick={() => dispatch(clearAllTodo())}
            >
              Clear All Todos
            </button>
          </div>
          <ul id="taskList" className="list-group">
            {status === "loading" && <li className="list-group-item">Loading...</li>}
            {todos?.length === 0  && status !== "loading" ? (
              <li className="list-group-item">No task available</li>
            ) : (
              todos?.map((todo) => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{todo.title}</span>
                  <div className="ms-auto">
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => editTodo(todo)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoComp;
