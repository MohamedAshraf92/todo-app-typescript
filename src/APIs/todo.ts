import axios from "axios";
import axiosInstance from "../axios";

import { Todo } from "../types/todo";

export const getTodos = async () => {
  try {
    const res = await axiosInstance.get("/");
    const todos = res.data;
    return todos;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
      throw Error("Something Went Rong");
    }
  }
};

export const getSingleTodo = async ({ queryKey }: any) => {
  // eslint-disable-next-line
  const [_key, { id }] = queryKey;
  if (id) {
    try {
      const res = await axios.get(`/${id}`);
      const todo = res.data;
      return todo;
    } catch (err) {
      console.log(err);
    }
  } else return null;
};

export const addTodo = async (newTodo: Todo) => {
  try {
    const res = await axios.post("/", newTodo);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (todo: Todo) => {
  console.log(todo);

  try {
    const res = await axios.put(`/${todo.id}`, todo);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await axios.delete(`/${id}`);
    const todo = res.data;
    return todo;
  } catch (err) {
    console.log(err);
  }
};
