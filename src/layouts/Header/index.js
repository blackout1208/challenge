import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom';
import { quizzesState, quizIDState} from '../../state'
import {useRecoilValue} from 'recoil'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styles from './styles'

export default function Header({backIcon}) {
  const navigate = useNavigate();
  const quizzes = useRecoilValue(quizzesState('quizzes'));
  const quizID = useRecoilValue(quizIDState);
  
  let title = "Quizzes"
  quizzes.forEach((element) => {
    if (element.id !== quizID){
      return
    }
    title = element.name
  });
  return (
    <Box sx={styles.Box}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={styles.Header}>
          {backIcon && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} onClick={() => navigate("/dashboard", { replace: true })}>
            <ArrowBackOutlinedIcon />
          </IconButton>}
          <Typography variant="h4" component="div" color="primary" sx={styles.Title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
