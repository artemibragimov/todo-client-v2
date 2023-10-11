'use client';
import React from 'react';
import * as ProfileSC from './Profile.styled';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProfileSC.Title>Settings</ProfileSC.Title>
      {children}
    </>
  );
}
