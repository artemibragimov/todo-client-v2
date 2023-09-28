import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter()
    const onClickLogout = ()=>{
        if (window.confirm('Do you really want to log out?')) {
            window.localStorage.removeItem('token')
            router.push('/')
        }
    }
    return (
        <>
            <button onClick={onClickLogout}>
                Log out
            </button>
        </>
    );
}
