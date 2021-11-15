import { Container, Grid, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Getreview from './Getreview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://immense-plains-77878.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    })
    return (
        <Container>

            <Grid container spacing={2}>
                {
                    reviews.map(getreview => <Getreview
                        key={getreview._id}
                        getreview={getreview}
                    ></Getreview>)
                }
            </Grid>
        </Container>
    );
};

export default Reviews;