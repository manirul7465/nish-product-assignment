
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Purchese = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://immense-plains-77878.herokuapp.com/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('booking proccess')
                    reset();
                }
            })

    };

    // (single product load)
    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(product)
    useEffect(() => {
        const url = `https://immense-plains-77878.herokuapp.com/products/${productId}`
        fetch(url)

            .then(res => res.json())
            .then(data => setProduct(data));
        console.log(productId)
    }, [productId])

    return (
         
          <Container > 
        <Grid item xs={12} sm={6} md={4} lg={6}>

            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        
                        image={product.img}
                        alt="green iguana"
                    />

                    <CardContent>
                    </CardContent>
                </CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                    name: {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    price:${product.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    product id: {productId}
                </Typography>
                <Typography variant="body2" color="text.warning">
                    details:{product.description}
                </Typography>

                <h2 className="order">place order</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name", { required: true })} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="product id" defaultValue="" {...register("id")} />
                    <input placeholder="product name" defaultValue="" {...register("productname")} />
                    <input placeholder="price" defaultValue="" {...register("price")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    <input  placeholder="pending" defaultValue="pending" readOnly {...register("pending")} />
                    <input type="submit" />
                </form>
            </Card>
        </Grid>
</Container>
    )
};

export default Purchese;