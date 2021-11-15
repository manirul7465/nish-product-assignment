import { Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matched');
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (

        <Container container spacing={2}>
            <Grid item xs={12} lg={12} md={12}>

                <Typography variant="h2">
                    Create an account
                </Typography>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <Grid >
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="your name"

                            name="name"

                            onBlur={handleOnBlur}
                            variant="standard" />
                    </Grid>

                    <Grid >
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="your email"
                            type="email"

                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                    </Grid>
                    <Grid >
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="your password"

                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" /> </Grid>
                    <Grid >
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="confirm password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}

                            variant="standard" /> </Grid>
                    <Button variant="contained" type="submit" color="error" sx={{ marginTop: '50px', width: '75%' }}>
                        Register
                    </Button>
                    <Typography variant="h5" sx={{ marginTop: '10px' }}>
                        OR
                    </Typography>

                    <Typography variant="h5">
                        already account? Back to login
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'whitesmoke' }} to="/login">
                        <Button variant="contained" color="warning">Login</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress></CircularProgress>}
                {user?.email && <Alert severity="success">registration succesfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
        </Container>
    );
};

export default Register;