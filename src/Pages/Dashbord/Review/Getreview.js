import * as React from 'react';
import './Getreview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Rating from 'react-rating';

const Getreview = ({ getreview }) => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    const { name, email, description, rating } = getreview;


    return (
        <Grid item xs={12} sm={6} md={4}>

            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="text.warning">
                        {description}
                    </Typography>
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                    >
                    </Rating>
                    <Typography variant="body2" color="text.warning" >

                    </Typography>


                </CardContent>
            </Card>

        </Grid>

    );
};

export default Getreview;