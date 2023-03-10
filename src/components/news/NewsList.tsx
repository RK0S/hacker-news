import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import NewsItem from "./NewsItem";
import { useStart } from "../../hooks/useStart";
import { msToDate } from "../../helpers/msToDate";
import { Box, Typography } from "@mui/material";
import { StoryData } from '../../models/story';

const NewsList: FC = () => {
  const { news, error, loading } = useTypedSelector((state) => state.news);
  useStart();

  return (
    <Box>
      {loading && <Typography variant="h4">Идет загрузка...</Typography>}
      {error && <Typography variant="h4">{error}</Typography>}
      {news.map(
        (item: StoryData) =>
          item && (
            <NewsItem
              id={item.id}
              title={item.title}
              score={item.score}
              author={item.by}
              date={msToDate(item.time)}
              key={item.id}
            />
          )
      )}
    </Box>
  );
};

export default NewsList;
