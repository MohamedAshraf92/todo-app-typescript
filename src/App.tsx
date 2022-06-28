import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { useQuery } from "react-query";

import Layout from "./containers/Layout/Layout";
import Board from "./containers/Board/Board";
import TodoForm from "./containers/TodoForm/TodoForm";
import { getTodos } from "./APIs/todo";

import { Todo } from "./types/todo";

import "antd/dist/antd.min.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const location = useLocation();
  const { pathname } = location;

  const useFetchTodos = () => useQuery("todos", getTodos);

  const { isLoading, isError, data, error } = useFetchTodos();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTodos(data?.filter((todo: Todo) => !todo.done));
        break;

      case "/completed":
        setTodos(data?.filter((todo: Todo) => todo.done));
        break;

      case "/all":
        setTodos(data);
        break;

      default:
        setTodos(data);
        break;
    }
  }, [pathname, data]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Board
                todos={todos}
                isLoading={isLoading}
                isError={isError}
                error={error}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <Board
                todos={todos}
                isLoading={isLoading}
                isError={isError}
                error={error}
              />
            }
          />
          <Route
            path="/all"
            element={
              <Board
                todos={todos}
                isLoading={isLoading}
                isError={isError}
                error={error}
              />
            }
          />
          <Route path="/new-todo" element={<TodoForm />} />
          <Route path="/edit/:id" element={<TodoForm />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
