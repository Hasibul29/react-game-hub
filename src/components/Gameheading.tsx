import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const Gameheading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres.results.find((gen) => gen.id === gameQuery.genreId);
  const platform = platforms.results.find(
    (palt) => palt.id === gameQuery.platformId
  );
  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default Gameheading;
