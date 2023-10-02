import { SubmitHandler, useForm } from "react-hook-form";
import s from "./Security.module.css";
import { ChangePasswordIcon } from "../../assets";
import { useEffect, useState } from "react";

interface Security {
  handleEditPassword: (body: { password: string }) => void;
}

type Inputs = {
  password: string;
  confirmPassword: string;
};

const Security = ({ handleEditPassword }: Security) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("password", { type: "custom", message: "custom message" });
      setError("confirmPassword", {
        type: "custom",
        message: "custom message",
      });
    } else {
      handleEditPassword({ password: data.password });
      reset({
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className={s.security}>
      <div className={s.title}>Edit password</div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type={"password"}
          className={
            errors.password
              ? s.text_input + " " + s.text_input_error
              : s.text_input
          }
          placeholder="Enter new password"
          {...register("password", { required: true })}
        />

        <input
          type={"password"}
          className={
            errors.password
              ? s.text_input + " " + s.text_input_error
              : s.text_input
          }
          placeholder="Confirm password"
          {...register("confirmPassword", { required: true })}
        />

        <button className={s.button} type="submit">
          <ChangePasswordIcon />
          <p>Change password</p>
        </button>
      </form>
    </div>
  );
};

export default Security;
