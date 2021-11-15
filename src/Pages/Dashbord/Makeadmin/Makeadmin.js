import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Makeadmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const proceed = window.confirm('are you sure, you make admin?');
        const user = { email };
        fetch('https://immense-plains-77878.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    
                    setSuccess(true);
                    alert('added succesfully');
                }
                
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make admin here</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    label="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button variant="contained" type="submit">make admin</Button>
            </form>
            {success && <Alert severity='success'>Made admin successfully!</Alert>}

        </div>
    );
};

export default Makeadmin;