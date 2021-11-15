import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">

                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Typography variant="h4" gutterBottom component="div">
                            Address: Dhaka North,

                        </Typography>
                        <Typography variant="h4" gutterBottom component="div">
                            Banani Road No. 12 - 19. CHANGE.

                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" gutterBottom component="div">
                            For phone order call=+8822222
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Home Delivery. 7 - 13 days
                        </Typography>
                    </Grid> </Grid>
                <Typography variant="subtitle2" style={{ color: 'yellow' }} gutterBottom component="div">
                    manir jewellery shop  since 2021
                </Typography>

            </AppBar>
        </Box>
    );
};

export default Footer;