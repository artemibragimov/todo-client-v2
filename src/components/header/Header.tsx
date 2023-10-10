'use client';
import Link from 'next/link';
import { HeaderLine } from './Header.styled';
import { userApi } from '@/redux/services/UserService';
import { Login, ProfileAvatar, ProfileLink, Title } from './Header.styled';
import { ProfileIcon } from '../../assets';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { data: userData } = userApi.useGetMeQuery();
  const pathname = usePathname();
  return (
    <HeaderLine>
      <Link href="/tasks">To-Do</Link>

      {pathname === '/tasks' && (
        <>
          <Login>{userData?.login}</Login>
          <ProfileLink>
            <Link href="/profile">
              {userData?.imageUrl ? (
                <ProfileAvatar src={userData.imageUrl} alt="User avatar" />
              ) : (
                <ProfileIcon width={40} />
              )}
            </Link>
          </ProfileLink>
        </>
      )}
      {pathname === '/profile' && <Title>Settings</Title>}
    </HeaderLine>
  );
};

export { Header };
