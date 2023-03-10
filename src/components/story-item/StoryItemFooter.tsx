import { FC, useState } from "react";
import { Typography, Box } from "@mui/material";
import Comments from "./Comments";
import { fetchItem } from "../../API/news";
import { StoryData } from "../../models/story";
import { CommentData } from "../../models/comment";

interface ItemFooterProps {
  story: StoryData;
}

const StoryItemFooter: FC<ItemFooterProps> = ({ story }: ItemFooterProps) => {
  const [commentData, setCommentData] = useState<StoryData | CommentData>(
    story
  );
  const [isRefreshing, setIsRefreshing] = useState<boolean>(true);

  const refreshComments = async () => {
    const response = await fetchItem(commentData.id);
    setCommentData(response);
    setIsRefreshing(false);
    setTimeout(() => {
      setIsRefreshing(true);
    }, 0);
  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ mt: 2, mb: 0.5 }} variant="h6">
          Комментарии: {commentData.descendants}
        </Typography>
        <Typography
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          variant="button"
          onClick={refreshComments}
        >
          Обновить комментарии
        </Typography>
      </Box>
      {!!commentData.descendants && isRefreshing && (
        <Comments treeData={commentData.kids} />
      )}
    </Box>
  );
};

export default StoryItemFooter;
