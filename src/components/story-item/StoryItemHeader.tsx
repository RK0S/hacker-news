import { FC } from "react";
import { Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { msToDate } from "../../helpers/msToDate";

const StoryItemHeader: FC<any> = ({ story }: any) => {
  return (
    <div>
      <Typography sx={{ mb: 0.5 }} variant="h4">
        {story.title}
      </Typography>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
        sx={{ mb: 0.3 }}
      >
        {story.score}{" "}
        <FavoriteIcon sx={{ color: "pink", mr: 1 }} fontSize="small" />
        <Typography>{story.by}</Typography>
      </Box>
      <Typography sx={{ mb: 2 }} fontSize="small">
        {msToDate(story.time)}
      </Typography>
    </div>
  );
};

export default StoryItemHeader;
