import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todos: [],
  loading: false,
  error: false
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state) => {
      state.todos = []

    }
  }
})

export const { getTodos } = todosSlice.actions

export default todosSlice.reducer