import { FC } from "react";
import { Typography, Link, Box } from "@mui/material";
import { StoryData } from "../../models/story";

interface ItemBodyProps {
  story: StoryData;
}

const StoryItemBody: FC<ItemBodyProps> = ({ story }: ItemBodyProps) => {
  return (
    <Box>
      <Typography
        sx={{ mb: 2 }}
        dangerouslySetInnerHTML={{ __html: story.text }}
      ></Typography>
      {story.url && <Typography variant="h6">Читать полностью</Typography>}
      <Link href={story.url} color="inherit" underline="hover">
        {story.url}
      </Link>
    </Box>
  );
};

export default StoryItemBody;
