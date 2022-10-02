import Service from './../api/axios'
import { EndPoints } from "../api/axios";
export type TTodo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}


export const fetchTodos = async () => {
  const { data } = await Service.api.get(EndPoints.todos)


  return data
}