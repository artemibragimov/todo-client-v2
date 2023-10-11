'use client';
import * as LoginSC from './Login.styled';

export default function dddd() {
  return (
    <LoginSC.SkeletonContainer>
      <LoginSC.SkeletonTittle>Log in</LoginSC.SkeletonTittle>

      {[0, 1].map((item) => (
        <LoginSC.SkeletonFormInput key={item} />
      ))}

      <LoginSC.SkeletonButton />
    </LoginSC.SkeletonContainer>
  );
}
