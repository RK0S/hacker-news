import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: FC = () => {
     return (
          <AppBar sx={{ bgcolor: "#ffa812" }} position='static'>
               <Toolbar>
                    <Typography variant="h4" color="inherit" component="div">
                         Hacker News
                    </Typography>
               </Toolbar>
          </AppBar>
     );
};

export default Header;