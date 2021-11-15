import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Worker from './Worker';


const workers = [
    {
        name: "ariana",
        img: "https://i.ibb.co/yRQ5SmC/Young-woman-creating-handmade-jewelry-in-her-studio.jpg",
        description: "Jewelers call upon their creativity and artistic ability to design jewelry. "

    },
    {
        name: "maria",
        img: "https://i.ibb.co/7KxKbHc/Jeweller-repairing-the-golden-necklace-in-jewelry-manufacture-workshop.jpg",
        description: "Find out expected salary, working hours, qualifications and more. ... You don't need a degree"

    },
    {
        name: "sapna",
        img: "https://i.ibb.co/0fq3BZv/images-2.jpg",
        description: "Handicraft workers combine artistic and manual skills to design, make, repair "

    },
    {
        name: "julia",
        img: "https://i.ibb.co/jg347Kj/download-1.jpg",
        description: "Summary. Handicraft workers use high-level technical skills to apply both traditional and contemporary "

    },
    {
        name: "chinky",
        img: "https://i.ibb.co/4t05Gmc/images-3.jpg",
        description: "Woodworker Apprentice · Eyewear Polisher · Bench Jeweler · Upholsterer · Master Artisan "

    },
    {
        name: "minky",
        img: "https://i.ibb.co/8dMV2kh/images-4.jpg",
        description: "For more information about other workers who create jewelry, see the profile on ... Advancemen "

    },
]


const Workers = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        workers.map(worker => <Worker
                            key={worker.name}
                            worker={worker}
                        ></Worker>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Workers;





