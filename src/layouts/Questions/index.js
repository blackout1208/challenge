import * as React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

export default function RowAndColumnSpacing() {
    const {quizID: id1, questionID: id2} = useParams();
    return (
        <Box sx={{ width: '100%' }}>
            {id1}<br />
            {id2}
        </Box>
    );
}