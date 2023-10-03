import Link from "next/link";
import s from "./Header.module.css";
import { HeaderLine } from "./Header.styled";

const Header = () => {
  return (
    <HeaderLine className={s.header}>
      <Link href="/tasks">To-Do</Link>
    </HeaderLine>
  );
};

export { Header };
