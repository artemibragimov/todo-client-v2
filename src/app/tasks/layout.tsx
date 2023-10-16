'use client';
import React from 'react';
import * as TasksSC from './Tasks.styled';
import Link from 'next/link';
import { ProfileIcon } from '@/assets/index';
import { userApi } from '@/redux/services/UserService';

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: userData } = userApi.useGetMeQuery();
  return (
    <>
      <TasksSC.UserInfoContainer>
        <TasksSC.Login>{userData?.login}</TasksSC.Login>
        <TasksSC.ProfileLink>
          <Link href="/profile">
            {userData?.imageUrl ? (
              <TasksSC.ProfileAvatar
                src={userData.imageUrl}
                alt="User avatar"
              />
            ) : (
              <ProfileIcon width={40} />
            )}
          </Link>
        </TasksSC.ProfileLink>
      </TasksSC.UserInfoContainer>

      {children}
    </>
  );
}
