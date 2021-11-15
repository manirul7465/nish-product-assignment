import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const Img = styled('img')({
    margin: 'auto',

})
const NotFound = () => {
    return (
        <div>
            <div>
                <Img alt="" src="https://cdn2.vectorstock.com/i/1000x1000/36/96/404-error-blue-not-found-page-vector-18273696.jpg" />
            </div>
            <Link to="/"><Button variant="contained" color="warning">goback</Button></Link>
        </div>
    );
};

export default NotFound;