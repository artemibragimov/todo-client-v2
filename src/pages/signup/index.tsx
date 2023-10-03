import React, { useState } from "react";
import { SignInIcon } from "../../assets";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { userApi } from "../../store/services/UserService";
import { useRouter } from "next/router";
import {
  Button,
  Error,
  LinkToLogin,
  SignupContainer,
  SignupForm,
  SignupInput,
  Tittle,
} from "./Signup.styled";

type Inputs = {
  login: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUp = () => {
  const [signUp] = userApi.useSignUpMutation();
  const router = useRouter();

  const [errorText, setErrorText] = useState("");
  const [iserror, setErrorinput] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      login: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (errors.login) {
      setErrorinput(true);
    }
    if (data.password !== data.repeatPassword) {
      setError("password", { type: "custom", message: "custom message" });
      setError("repeatPassword", { type: "custom", message: "custom message" });
    } else {
      const register = await signUp({
        login: data.login,
        email: data.email,
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

      if (register) {
        window.localStorage.setItem("token", register.token);
        await router.push("/");
      }
    }
  };

  return (
    <SignupContainer>
      <Tittle>Sign up</Tittle>

      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <SignupInput
          $box_shadow={errors.login ? "error" : ""}
          placeholder="Enter login"
          {...register("login", { required: true })}
        />

        <SignupInput
          $box_shadow={errors.login ? "error" : ""}
          placeholder="Enter email"
          {...register("email", { required: true })}
        />

        <SignupInput
          $box_shadow={errors.login ? "error" : ""}
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />

        <SignupInput
          $box_shadow={errors.login ? "error" : ""}
          type="password"
          placeholder="Enter password"
          {...register("repeatPassword", { required: true })}
        />

        <Error>{errorText}</Error>

        <LinkToLogin>
          <Link href="/login">Log in</Link>
        </LinkToLogin>

        <Button type="submit">
          <SignInIcon />
          Sign up
        </Button>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignUp;
