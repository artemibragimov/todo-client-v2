import React from 'react';
import s from './Login.module.css';
import {SignInIcon} from "../../assets";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    login: string,
    password: string
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Inputs>({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        console.log(data);
    };

    return (
        <div className={s.login}>
            <div className={s.tittle}>
                Log in
            </div>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <input
                    className={s.text_input}
                    placeholder='Enter login'
                    {...register("login", {required: true})}
                />
                {errors.login && <div className={s.form_error}>This field should not be empty</div>}

                <input
                    type={"password"}
                    className={s.text_input}
                    placeholder='Enter password'
                    {...register("password", {required: true})}
                />
                {errors.password && <div className={s.form_error}>This field should not be empty</div>}

                <button className={s.button} type="submit">
                    <SignInIcon/>
                    <p>Sign in</p>
                </button>

            </form>
        </div>
    );
};

export default Login;