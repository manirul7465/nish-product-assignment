import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container container spacing={2} style={{marginTop:'60px'}}>
            <Grid item xs={12} lg={12} md={12}>

                <Typography variant="h2">
                    please login
                </Typography>
                <form onSubmit={handleLoginSubmit}>

                    <Grid >
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="your email"
                            name="email"
                            type="email"
                            required
                            onChange={handleOnChange}
                            variant="standard" />
                    </Grid>
                    <Grid >
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            required
                            name="password"
                            type="password"
                            onChange={handleOnChange}
                            label="your password"
                            variant="standard" /> </Grid>
                    {isLoading && <CircularProgress></CircularProgress>}
                    {user?.email && <Alert severity="success">login succesfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <Button variant="contained" type="submit" color="error" sx={{ marginTop: '50px', width: '75%' }}>
                        log in
                    </Button>

                    <Typography variant="h5">
                        Dont have account? please register
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'whitesmoke' }} to="register">
                        <Button variant="contained" color="warning">register</Button>
                    </NavLink>
                </form>
                <p>-------------------------</p>
                <Typography variant="h3">
                    Or
                </Typography>

                <Button onClick={handleGoogleSignIn} variant="contained" type="submit" color="warning" sx={{ marginTop: '50px', width: '75%' }}>
                    google sign in
                </Button>
            </Grid>
        </Container>
    );
};

export default Login;