import { createSlice } from '@reduxjs/toolkit'
import { TTodo } from "../../services/todosService"
import { fetchAllTodos } from "./todosAction"


type TInitialState = {
  todos: TTodo[],
  loading: boolean,
  error: boolean
}

const initialState: TInitialState = {
  todos: [],
  loading: false,
  error: false
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
      state.todos = payload
      state.error = false
      state.loading = false
    })
    builder.addCase(fetchAllTodos.pending, (state, _) => {
      state.error = false
      state.loading = true
    })
    builder.addCase(fetchAllTodos.rejected, (state, _) => {
      state.error = true
      state.loading = false
    })
  }
})



export default todosSlice.reducer