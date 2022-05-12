import React from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "react-query";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { SiCheckmarx } from "react-icons/si";

import { deleteTodo, updateTodo } from "../../APIs/todo";
import { Todo } from "../../types/todo";

import styles from "./todoCard.module.scss";

type cardProps = {
  todo: Todo;
};

const TodoCard: React.FC<cardProps> = ({ todo }) => {
  const updatedTodo = {
    title: todo.title,
    id: todo.id,
    done: !todo.done,
  };

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutateAsync: toggleStateMutation } = useMutation(updateTodo);

  const togleDone = async () => {
    await toggleStateMutation(updatedTodo);
    queryClient.invalidateQueries("todos");
  };

  const editHandler = () => navigate(`/edit/${todo.id}`);

  const { mutateAsync: deleteTodoMutation } = useMutation(deleteTodo);

  const deleteHandler = async () => {
    await deleteTodoMutation(todo.id!);
    queryClient.invalidateQueries("todos");
  };

  return (
    <div className={styles.card}>
      <h3 style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </h3>
      <div className={styles["card-actions"]}>
        <SiCheckmarx
          className={styles.icon}
          style={{ color: todo.done ? "green" : "gray" }}
          onClick={togleDone}
        />
        <BiEditAlt className={styles.icon} onClick={editHandler} />
        <MdDelete className={styles.icon} onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default TodoCard;
