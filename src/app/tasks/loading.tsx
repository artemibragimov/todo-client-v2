'use client';
import * as TasksSC from './Tasks.styled';

export default function Loading() {
  return (
    <TasksSC.SkeletonContainer>
      <TasksSC.SkeletonNavBar>
        {[0, 1, 2].map((item) => (
          <TasksSC.SkeletonButton key={item} />
        ))}

        <TasksSC.SkeletonBottomBar>
          <TasksSC.SkeletonButton />
        </TasksSC.SkeletonBottomBar>
      </TasksSC.SkeletonNavBar>

      <TasksSC.SkeletonTaskBoard>
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <TasksSC.SkeletonTask key={item} />
        ))}
      </TasksSC.SkeletonTaskBoard>
    </TasksSC.SkeletonContainer>
  );
}
