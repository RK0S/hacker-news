import { Box, Card, CardContent } from "@mui/material";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

interface NewsItemProps {
  id: number;
  title: string;
  score: number;
  author: string;
  date: string | number;
}

const NewsItem: FC<NewsItemProps> = ({
  id,
  title,
  score,
  author,
  date,
}: NewsItemProps) => {
  return (
     <Link to={`/news/${id}`}>
    <Card sx={{ mb: 1.5, cursor: "pointer" }}>
      <CardContent>
        <Typography sx={{ mb: 1 }} variant="h6">
          {title}
        </Typography>
        <Typography sx={{ mb: 0.5 }} variant="body2">
          Автор: {author}
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={{
            display: "flex",
            alignItems: "center"
          }}>
            {score} <FavoriteIcon sx={{ color: "pink" }} fontSize="small" />
          </Box>
          <Typography fontSize="small">{date}</Typography>
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
};

export default NewsItem;
