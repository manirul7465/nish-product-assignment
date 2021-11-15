import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Manageproducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://immense-plains-77878.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('are you sure, you want delete item?');
        if (proceed) {
            const url = `https://immense-plains-77878.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted succesfully');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);

                    }

                });
        }
    }

    return (
        <div>
            <h2>Manage product</h2>
            {
                products.map(product => <div key={product._id}>
                    <h3>Product name:={product.name}</h3>
                    <h3>Product id:={product._id}</h3>
                    <Button onClick={() => handleDelete(product._id)} variant="contained" color="warning">delete</Button>
                </div>)

            }
        </div>
    );
};

export default Manageproducts;