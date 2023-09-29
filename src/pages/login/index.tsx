import React, { useState } from "react";
import s from "./Login.module.css";
import { SignInIcon } from "../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { userApi } from "../../store/services/UserService";

type Inputs = {
  login: string;
  password: string;
};

const Login = () => {
  const [errorText, setErrorText] = useState("");
  const router = useRouter();
  const [signIn] = userApi.useSignInMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const loginUser = await signIn({
      login: data.login,
      password: data.password,
    })
      .unwrap()
      .catch((error) => {
        if (error.data.errors) {
          setErrorText(error.data.errors[0].msg);
        } else {
          setErrorText(error.data.message);
        }
      });

    if (loginUser) {
      window.localStorage.setItem("token", loginUser.token);
      router.push("/");
    }
  };

  return (
    <div className={s.login}>
      <div className={s.tittle}>Log in</div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={
            errors.login
              ? s.text_input + " " + s.text_input_error
              : s.text_input
          }
          placeholder="Enter login"
          {...register("login", { required: true })}
        />

        <input
          type={"password"}
          className={
            errors.password
              ? s.text_input + " " + s.text_input_error
              : s.text_input
          }
          placeholder="Enter password"
          {...register("password", { required: true })}
        />

        <div className={s.form_error}>{errorText}</div>

        <div className={s.link}>
          <Link href="/signup">Sign up</Link>
        </div>

        <button className={s.button} type="submit">
          <SignInIcon />
          <p>Sign in</p>
        </button>
      </form>
    </div>
  );
};

export default Login;
