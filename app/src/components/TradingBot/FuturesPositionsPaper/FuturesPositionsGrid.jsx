import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';

const FuturesPositionsGrid = ()=> {
    const classes = useStyles();
    const [positions, setPositions] = useState([{}]);

    useEffect(()=> {
        fetch('/futuresPositions')
        .then(response =>
            response.json()
        )
        .then(data =>
            setPositions(data.futuresPositions)
        )
    }, []);

    return (
        <Grid>
            {
                positions.map((item, i) => {
                    return (
                        <Grid container key={i}>
                            <Grid item lg={3} md={3} sm={3} xs={3} align='left'>
                                <Typography className={classes.numeric}>
                                    {item.symbol}
                                </Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={3} align='right'>
                                <Typography className={classes.numeric}>
                                    {item.entryPrice}
                                </Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={3} align='right'>
                                <Typography className={classes.numeric}>
                                    {item.leverage}
                                </Typography>
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={3} align='right'>
                                <Typography className={classes.numeric}>
                                    {item.PnL}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default FuturesPositionsGrid;