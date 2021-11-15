import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Myorders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://immense-plains-77878.herokuapp.com/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])


    // delete order
    const handleDeleteItem = id => {
        const proceed = window.confirm('are you sure, you want cancel your order?');
        if (proceed) {
            const url = `https://immense-plains-77878.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('cancel order succesfully');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders)
                    }
                });
        }
    }
    return (
        <div>
            <h2>Total orders:{orders.length}</h2>
            <ul>

                {orders.map(order => <li
                    key={order._id}
                >productname: {order.productname}:
                    email: {order.email}

                    <Button onClick={() => handleDeleteItem(order._id)} variant="contained" color="warning">cancel order</Button>
                </li>)}
            </ul>
        </div>
    );
};

export default Myorders;