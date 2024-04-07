import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatform";

interface Prop {
  onselectPlatform: (platformId: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onselectPlatform, selectedPlatformId }: Prop) => {
  const { data, error } = usePlatform();
  const { data: platforms } = usePlatform();
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
