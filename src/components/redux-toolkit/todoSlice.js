import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export const fetchTodos = createAsyncThunk("todo/getTodo", async () => {
  const response = await fetch(API_URL);
  let todos = await response.json();
  return todos;
});

let todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: "idle",
    error: null,
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
    clearAllTodo : (state) => {
        state.todos = [];
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.todos = [...state.todos, ...action.payload];
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { addTodo, deleteTodo, updateTodo, clearAllTodo } = todoSlice.actions;
export default todoSlice.reducer;
