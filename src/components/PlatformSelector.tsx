import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Prop {
  onselectPlatform: (platformId: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onselectPlatform, selectedPlatformId }: Prop) => {
  const { data, error } = usePlatforms();
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(
    (palt) => palt.id === selectedPlatformId
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onselectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
