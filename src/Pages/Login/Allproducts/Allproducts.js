import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Allproduct from './Allproduct';


const Allproducts = () => {

    const [allproducts, setallProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-plains-77878.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setallProducts(data));
    }, [])
    return (
        <div>
            <h1>Our exlore colloction</h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        allproducts.map(product => <Allproduct
                            key={product.id}
                            product={product}

                        ></Allproduct>)
                    }

                </Grid >

            </Container>
        </div>
    );
};

export default Allproducts;