import { FC, useState, useEffect } from "react";
import { fetchItem } from "../../API/news";
import Comments from "./Comments";
import { Card, CardContent, Typography } from "@mui/material";
import { msToDate } from "../../helpers/msToDate";
import { CommentData } from "../../models/comment";

interface CommentProps {
  node: number;
  changeStatus: () => void;
  isLoading: boolean;
}

const Comment: FC<CommentProps> = ({
  node,
  changeStatus,
  isLoading,
}: CommentProps) => {
  const [comment, setComment] = useState<CommentData | any>({});
  const [showComments, setShowComments] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const comment = await fetchItem(node);
      setComment(comment);
      changeStatus();
    };
    fetch();
  }, []);

  const moreComments = () => {
    setShowComments((showComments) => !showComments);
  };

  const isOpen: boolean = Array.isArray(comment.kids);

  if (isLoading) return <div></div>;
  const isDeleted: boolean = comment.dead || comment.deleted;

  return (
    <Card sx={{ mb: 1, mt: 1 }}>
      <CardContent>
        <Typography sx={{ mb: 0.5 }} variant="h6">
          {comment.by}
        </Typography>
        {!isDeleted ? (
          <Typography
            sx={{ mb: 1 }}
            dangerouslySetInnerHTML={{ __html: comment.text }}
          ></Typography>
        ) : (
          <Typography sx={{ mb: 1 }}>Комментарий удален</Typography>
        )}
        <Typography sx={{ mb: 2 }} fontSize="small">
          {msToDate(comment.time)}
        </Typography>
        {isOpen && (
          <Typography
            sx={{ cursor: "pointer" }}
            variant="button"
            onClick={moreComments}
          >
            {!showComments ? "Смотреть ответы" : "Скрыть ответы"}
          </Typography>
        )}
        {showComments && <Comments treeData={comment.kids} />}
      </CardContent>
    </Card>
  );
};

export default Comment;
