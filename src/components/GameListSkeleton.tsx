import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";

const GameListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Stack>
        {skeletons.map((skeleton) => (
          <HStack key={skeleton}>
            <SkeletonCircle />
            <Skeleton height="10px" width="100%" />
          </HStack>
        ))}
      </Stack>
    </>
  );
};

export default GameListSkeleton;
