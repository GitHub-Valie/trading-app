import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import BestTradeDetails from './BestTradeDetails';

const BestTradePaper = ()=> {

    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.paper} style={{minHeight: '13.05rem'}}>
            
            <Grid container>
                
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.paper_title} align="left">
                            Best trade
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align="left">
                            Symbol
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align="left">
                            Profit (USDT)
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align="left">
                            Price
                        </Typography>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.column_title} align="left">
                            Quantity
                        </Typography>
                    </Grid>

                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <BestTradeDetails />
                </Grid>

            </Grid>
        </Paper>
    );
}

export default BestTradePaper;





