import Link from 'next/link';
import s from './Header.module.css';

const Header = () => {

    return (
        <header className={s.header}>
            <Link href='/' className={s.logo}>To-Do</Link>
        </header>
    );
};

export { Header };