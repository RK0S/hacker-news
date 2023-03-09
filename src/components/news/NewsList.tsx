import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NewsItem from './NewsItem';
import Typography from '@mui/material/Typography';
import { useStart } from '../../hooks/useStart';
import { msToDate } from '../../helpers/msToDate';

const NewsList: FC = () => {
     const {news, error, loading} = useTypedSelector(state => state.news)
     useStart()

     return (
          <div>
               {loading && <Typography variant='h4'>Идет загрузка...</Typography>}
               {error && <Typography variant='h4'>{error}</Typography>}
               {news.map(item =>
                    item &&
                    <NewsItem 
                         id={item.id}
                         title={item.title} 
                         score={item.score} 
                         author={item.by}
                         date={msToDate(item.time)}
                         key={item.id}
                    />
               )}
          </div>
     );
};

export default NewsList;