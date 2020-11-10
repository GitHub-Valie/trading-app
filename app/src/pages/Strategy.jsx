import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MainPaper from '../components/Strategy/index';
import { useStyles } from '../components/styles/styles';

const Strategy = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <MainPaper />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.footer}>
                <Typography variant="body1" color="inherit">
                    &copy; 2020 ValentinLHB
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Strategy;