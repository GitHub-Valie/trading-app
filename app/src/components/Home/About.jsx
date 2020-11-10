import React from 'react';
import {
    Paper, Typography, Grid
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const About = () => {

    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.about_paper}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.about_title}>
                        About
                    </Typography>
                    <Typography className={classes.about_text}>
                        What you are seeing is a web application that will introduce you to TradeRat, a cryptocurrency derivatives trading algorithm.
                        Here, you will be provided with a brief explanation of what a trading algorithm is and how it works, as well as the 
                        tools I used to run TradeRat. In a way, this project also serves as a testimony of my interest in code, financial markets and 
                        data science.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )

}

export default About;