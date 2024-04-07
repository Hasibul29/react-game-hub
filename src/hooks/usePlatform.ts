import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find((palt) => palt.id === id);
};

export default usePlatform;
