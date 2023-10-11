'use client';

import * as ProfileSC from './Profile.styled';

export default function dddd() {
  return (
    <ProfileSC.SkeletonContainer>
      <ProfileSC.SkeletonNavBar>
        {[0, 1].map((item) => (
          <ProfileSC.SkeletonButton key={item} />
        ))}

        <ProfileSC.SkeletonBottomBar>
          <ProfileSC.SkeletonButton />
        </ProfileSC.SkeletonBottomBar>
      </ProfileSC.SkeletonNavBar>

      <ProfileSC.SkeletonBoard>
        <ProfileSC.SkeletonPhoto />
        <ProfileSC.SkeletonLogin />
        <ProfileSC.SkeletonEmail />
      </ProfileSC.SkeletonBoard>
    </ProfileSC.SkeletonContainer>
  );
}
