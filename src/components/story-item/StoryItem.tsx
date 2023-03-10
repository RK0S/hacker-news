import { FC } from "react";
import StoryItemBody from "./StoryItemBody";
import StoryItemHeader from "./StoryItemHeader";
import StoryItemFooter from "./StoryItemFooter";
import { Box } from "@mui/material";
import { StoryData } from "../../models/story";

interface ItemProps {
  story: StoryData;
}

const StoryItem: FC<ItemProps> = ({ story }: ItemProps) => {
  return (
    <Box>
      <StoryItemHeader story={story} />
      <StoryItemBody story={story} />
      <StoryItemFooter story={story} />
    </Box>
  );
};

export default StoryItem;
