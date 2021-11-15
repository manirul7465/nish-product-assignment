import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Allproduct = (props) => {

    const { _id, name, img, price, description } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4}>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            price:${price}
                        </Typography>
                        <Typography variant="body2" color="text.warning">
                            {description}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <Link to={`/purchese/${_id}`} style={{ textDecoration: 'none', }} >
                    <Button color="warning" variant="contained">purchese: {name}</Button>
                </Link>
            </Card>

        </Grid>
    );
};

export default Allproduct;