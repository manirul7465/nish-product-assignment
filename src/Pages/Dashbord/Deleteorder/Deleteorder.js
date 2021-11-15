import React, { useEffect, useState } from 'react';



const Deleteorder = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://immense-plains-77878.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    // delete item
    const handleDeleteItem = id => {
        const proceed = window.confirm('are you sure, you want delete order?');
        if (proceed) {
            const url = `https://immense-plains-77878.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted succesfully');
                        const remainingbookings = bookings.filter(book => book._id !== id);
                        setBookings(remainingbookings)
                    }
                });
        }
    }



    return (
        <div>
            <ul>
                {
                    bookings.map(book => <li
                        key={book._id}
                    >
                        name:{book.name} email :{book.email}
                        <button onClick={() => handleDeleteItem(book._id)} className="bg-warning">delete order</button>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Deleteorder;