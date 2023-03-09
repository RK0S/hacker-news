import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../API/news";
import { Typography } from '@mui/material';
import StoryItem from '../components/story-item/StoryItem';

const NewsItemPage: FC = () => {
  const params = useParams();
  const [storyData, setStoryData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetch = async () => {
      if (params.id) {
        const response = await fetchItem(+params.id);
        setStoryData(response);
        setIsLoading(false)
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {isLoading
        ? <Typography variant='h4'>Идет загрузка...</Typography>
        : <StoryItem story={storyData} />
      }
    </div>
  );
};

export default NewsItemPage;
