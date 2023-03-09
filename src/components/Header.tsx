import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import { useActions } from './../hooks/useActions';
import { useParams, Link } from 'react-router-dom';

import { buttonStyles } from '../styles/buttonStyles';

const Header: FC = () => {
     const {fetchNews} = useActions()
     const params = useParams()
     return (
          <AppBar sx={{ bgcolor: "#ffa812" }} position='static'>
               <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h4" color="inherit" component="div">
                         Hacker News
                    </Typography>
                    {params.id
                         ? <Link to='/'><Button sx={buttonStyles} variant="outlined">Вернуться</Button></Link>
                         : <Button onClick={() => fetchNews()} sx={buttonStyles} variant="outlined">Обновить список</Button>
                    }
               </Toolbar>
          </AppBar>
     );
};

export default Header;