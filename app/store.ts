import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import kanyeReducer from '../features/kanye/kanyeSlice';
import todosReducer from './../features/todos/todosSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
    todos: todosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;