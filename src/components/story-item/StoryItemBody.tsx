import { FC } from "react";
import { Typography, Link } from '@mui/material';

const StoryItemBody: FC<any> = ({ story }: any) => {
  return (
    <div>
      <Typography sx={{ mb: 2 }}>
        <div dangerouslySetInnerHTML={{ __html: story.text }}></div>
      </Typography>
      {story.url && <Typography variant="h6">Читать полностью</Typography>}
      <Link href={story.url} color="inherit" underline="hover">
        {story.url}
      </Link>
    </div>
  );
};

export default StoryItemBody;
