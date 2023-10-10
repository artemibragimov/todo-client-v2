import Link from 'next/link';
import { HeaderLine } from './Header.styled';
import { userApi } from '../../store/services/UserService';
import { Login, ProfileAvatar, ProfileLink, Title } from './Header.styled';
import { ProfileIcon } from '../../assets';
import { useRouter } from 'next/router';

const Header = () => {
  const { data: userData } = userApi.useGetMeQuery();
  const { asPath } = useRouter();
  return (
    <HeaderLine>
      <Link href="/tasks">To-Do</Link>

      {asPath === '/tasks' && (
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
      {asPath === '/profile' && <Title>Settings</Title>}
    </HeaderLine>
  );
};

export { Header };
