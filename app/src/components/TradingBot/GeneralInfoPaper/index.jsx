import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import GeneralInfoDetails from './GeneralInfoDetails';

const GeneralInfoPaper = ()=> {

    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.paper} style={{minHeight: '13.05rem'}}>
            
            <Grid container>
                
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.paper_title} align="left">
                            General info
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align='left'>
                            Starting funds
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align='left'>
                            Total commissions
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align='left'>
                            Uptime
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align='left'>
                            Strategy
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align='left'>
                            Interval
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align='left'>
                            Stop loss
                        </Typography>
                    </Grid>

                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <GeneralInfoDetails />
                </Grid>

            </Grid>
        </Paper>
    );
}

export default GeneralInfoPaper;