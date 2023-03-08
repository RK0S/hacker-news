import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import NewsItem from './NewsItem';
import Typography from '@mui/material/Typography';
import moment from 'moment';

const NewsList: FC = () => {
     const {news, error, loading} = useTypedSelector(state => state.news)
     const {fetchNews} = useActions()

     useEffect(() => {
          fetchNews()
     }, [])

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
                         date={moment(item.time * 1000).format("DD-MM-YYYY h:mm")}
                         key={item.id}
                    />
               )}
          </div>
     );
};

export default NewsList;