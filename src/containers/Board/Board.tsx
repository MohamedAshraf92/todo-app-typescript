import React from "react";

import TodoCard from "../../components/todoCard/todoCard";

import { Todo } from "../../types/todo";

import styles from "./Board.module.scss";

type propsType = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

const Board: React.FC<propsType> = ({ todos, isLoading, isError, error }) => {
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return (
      <span>
        Error: {error instanceof Error ? error.message : "Something Went Rong"}
      </span>
    );
  }

  return (
    <div className={styles.container}>
      {todos?.map((todo: Todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Board;
