import React from 'react';
import {
    AppBar, Toolbar, Typography, Container 
} from "@material-ui/core";
import { useStyles } from '../styles/styles';

export default function CopyrightFooter() {

    const classes = useStyles();

    return (
        <AppBar color="primary" className={classes.bottom_appbar}>
          <Container>
            <Toolbar flex='1'>
              <Typography variant="body1" color="inherit">
                &copy; 2020 ValentinLHB
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}


// import React from 'react';
// import { useStyles } from '../styles/styles';
// import {
//     Typography, Link, Grid
// } from '@material-ui/core';

// const CopyrightFooter = () => {

//     const classes = useStyles();

//     const copyright = () => {
//         return (
//             <Typography className={classes.footer}>
//                 {"© "}
//                 <Link href='/' className={classes.footer}>
//                     Valentin Le Houëdec-Belin
//                 </Link>
//                 {'   '}
//                 {new Date().getFullYear()}
//             </Typography>
//         );
//     }

//     return (
//         <Grid container>
//             {copyright()}
//         </Grid>
//     );

// }

// export default CopyrightFooter;