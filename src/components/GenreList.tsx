import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";
import GameListSkeleton from "./GameListSkeleton";

interface Prop {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Prop) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <GameListSkeleton />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
