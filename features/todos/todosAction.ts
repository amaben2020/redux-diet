import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTodos } from "../../services/todosService"


// thunk creation
export const fetchAllTodos = createAsyncThunk('todos/fetchAllTodos', fetchTodos)