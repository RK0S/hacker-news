import { FC } from 'react';
import { Typography } from '@mui/material';
import Comments from "./Comments";

const StoryItemFooter: FC<any> = ({story}: any) => {
    return (
        <div>
            <Typography sx={{ mt: 2, mb: 0.5 }} variant="h6">
                Комментарии: {story.descendants}
            </Typography>
            {!!story.descendants && <Comments />}
        </div>
    );
};

export default StoryItemFooter;