import React, {useState} from 'react';
import s from './Signup.module.css';
import {SignInIcon} from "../../assets";
import {SubmitHandler, useForm} from "react-hook-form";
import Link from 'next/link';
import {userApi} from '../../store/services/UserService';
import {useRouter} from 'next/router';

type Inputs = {
    login: string,
    email: string,
    password: string
    repeatPassword: string
};

const SignUp = () => {
    const [errorText, setErrorText] = useState('');
    const router = useRouter();
    const [signUp] = userApi.useSignUpMutation();
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors}
    } = useForm<Inputs>({
        defaultValues: {
            login: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (data.password !== data.repeatPassword) {
            setError('password', {type: 'custom', message: 'custom message'});
            setError('repeatPassword', {type: 'custom', message: 'custom message'});
        } else {
            const register = await signUp({
                login: data.login,
                email: data.email,
                password: data.password
            }).unwrap()
                .catch((error) => {
                    if (error.data.errors) {
                        setErrorText(error.data.errors[0].msg);
                    } else {
                        setErrorText(error.data.message);
                    }
                });

            if (register) {
                window.localStorage.setItem('token', register.token);
                await router.push('/');
            }
        }
    };

    return (
        <div className={s.login}>
            <div className={s.tittle}>
                Sign up
            </div>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <input
                    className={errors.login ? s.text_input + ' ' + s.text_input_error : s.text_input}
                    placeholder='Enter login'
                    {...register("login", {required: true})}
                />

                <input
                    className={errors.email ? s.text_input + ' ' + s.text_input_error : s.text_input}
                    placeholder='Enter email'
                    {...register("email", {required: true})}
                />

                <input
                    type={"password"}
                    className={errors.password ? s.text_input + ' ' + s.text_input_error : s.text_input}
                    placeholder='Enter password'
                    {...register("password", {required: true})}
                />

                <input
                    type={"password"}
                    className={errors.repeatPassword ? s.text_input + ' ' + s.text_input_error : s.text_input}
                    placeholder='Enter password'
                    {...register("repeatPassword", {required: true})}
                />

                <div className={s.form_error}>{errorText}</div>

                <div className={s.link}>
                    <Link href='/login'>
                        Log in
                    </Link>
                </div>

                <button className={s.button} type="submit">
                    <SignInIcon/>
                    <p>Sign up</p>
                </button>

            </form>
        </div>
    );
};

export default SignUp;