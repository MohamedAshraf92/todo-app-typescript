import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router";

import { addTodo, getSingleTodo, updateTodo } from "../../APIs/todo";

import styles from "./TodoForm.module.scss";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { data } = useQuery(["todos", { id }], getSingleTodo);

  const sentTodo = {
    title,
    done: data ? data?.done : false,
  };

  const { mutateAsync: addTodoMutation } = useMutation(addTodo);
  const { mutateAsync: editTodoMutation } = useMutation(updateTodo);

  const submitForm = async () => {
    data
      ? await editTodoMutation({ ...sentTodo, id: parseInt(id!) })
      : await addTodoMutation(sentTodo);
    queryClient.invalidateQueries("todos");
    navigate("/");
  };

  return (
    <form className={styles["todo-form"]}>
      <label className={styles.label}>Todo title</label>
      <textarea
        className={styles.textarea}
        defaultValue={data?.title || ""}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles["todo-form-actions"]}>
        <button type="button" className={styles["form-btn"]}>
          Cancel
        </button>
        <button
          type="button"
          className={styles["form-btn"]}
          onClick={submitForm}
        >
          {data ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
