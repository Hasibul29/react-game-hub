import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCropedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform) ?? []}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
