import React from 'react';
import { useStyles } from '../../styles/styles';
import Paper from '@material-ui/core/Paper';

import { Grid } from '@material-ui/core';
import ChartTabs from './ChartTab';

const ChartPaper = ()=> {
    
    const classes = useStyles()

    return (
        <Paper elevation={4} className={classes.chart_paper}>
            
            <Grid container>

                <Grid item lg={12} md={12} sm={12} xs={12} align='center'>
                    <ChartTabs />
                </Grid>
                
            </Grid>
            
        </Paper>
    )
}

export default ChartPaper;