import React from 'react';
import { styled } from '@mui/material/styles';
const Img = styled('img')({
    margin: 'auto',

})
const Bannar = () => {
    return (
        <div>
            <h1>banner</h1>
            <Img alt="" style={{ width: '100%', height: '500px' }} src="https://i.ibb.co/BqHs2jf/maxresdefault.jpg" />
        </div>
    );
};

export default Bannar;