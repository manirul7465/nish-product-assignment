import { Grid } from '@mui/material';
import React from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Worker = (props) => {
    const { name, description, img } = props.worker;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h3" gutterBottom component="div">
                        name: {name}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        job: {description}
                    </Typography>

                </CardContent>

            </Card>
        </Grid>
    );
};

export default Worker;