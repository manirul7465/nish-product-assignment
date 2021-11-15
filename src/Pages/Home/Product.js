import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid,} from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, img, price, description } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4}>

            <Card sx={{ maxWidth: 345 }}>

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

                <Link style={{ textDecoration: 'none', }} to={`/purchese/${_id}`}>
                    <Button color="warning" variant="contained">purchese: {name}</Button>
                </Link>
            </Card>

        </Grid>
    );
};

export default Product;