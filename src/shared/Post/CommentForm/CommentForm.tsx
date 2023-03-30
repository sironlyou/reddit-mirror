import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../../utils/ts/interface";
import styles from "./commentform.css";

export function CommentForm() {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert("comment sent");
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("comment", { required: true, minLength: 3 })}
        className={styles.input}
        value={value}
        aria-invalid={errors.comment ? "true" : undefined}
        onChange={handleChange}
      />
      {errors.comment && <span>enter more that 3 symbols</span>}
      <button type="submit" className={styles.button}>
        comment
      </button>
    </form>
  );
}
