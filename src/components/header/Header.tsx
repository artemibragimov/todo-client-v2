import Link from 'next/link';
import s from './Header.module.css';
import { ProfileIcon } from '../../assets';
import { userApi } from '../../store/services/UserService';
import { useEffect } from 'react';

const Header = () => {
    const { data } = userApi.useGetMeQuery("")
    const userName = data?.login

    useEffect

    return (
        <header className={s.header}>
            <Link href='/' className={s.logo}>To-Do</Link>
            <div className={s.userName}>
                {userName}
            </div>
            <Link href='/profile'>
                <ProfileIcon width={30} />
            </Link>
        </header>
    )
};

export { Header };