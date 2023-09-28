import { useRouter } from "next/router";
import s from './Profile.module.css'

export default function Profile() {
    const router = useRouter()
    const onClickLogout = () => {
        if (window.confirm('Do you really want to log out?')) {
            window.localStorage.removeItem('token')
            router.push('/login')
        }
    }
    return (
        <>
            <div className={s.settings}>
                Settings
            </div>
            <button onClick={onClickLogout}>
                Log out
            </button>
        </>
    );
}
