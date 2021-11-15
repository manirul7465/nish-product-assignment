import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-plains-77878.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <Container>
            <Grid container spacing={2}>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </Grid >

        </Container>
    );
};

export default Products;

