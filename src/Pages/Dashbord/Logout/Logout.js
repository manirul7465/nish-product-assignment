import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth';

const Logout = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>

                <Toolbar>
                    {user?.email ?
                        <Button onClick={logout} variant="contained" color="warning">Logout</Button>

                        :

                        <Button variant="contained" color="warning">Login</Button>

                    }
                </Toolbar>

            </Box>
        </div>
    );
};

export default Logout;