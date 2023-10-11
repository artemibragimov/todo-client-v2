'use client';
import Link from 'next/link';
import { HeaderLine } from './Header.styled';

const Header = () => {
  return (
    <HeaderLine>
      <Link href="/tasks">To-Do</Link>
    </HeaderLine>
  );
};

export { Header };
