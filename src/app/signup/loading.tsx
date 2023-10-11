'use client';
import * as SignUpSC from './Signup.styled';

export default function Loading() {
  return (
    <SignUpSC.SkeletonContainer>
      <SignUpSC.SkeletonTittle>Sign up</SignUpSC.SkeletonTittle>
      {[0, 1, 2, 3].map((item) => (
        <SignUpSC.SkeletonFormInput key={item} />
      ))}
      <SignUpSC.SkeletonButton />
    </SignUpSC.SkeletonContainer>
  );
}
