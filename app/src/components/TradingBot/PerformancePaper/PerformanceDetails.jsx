import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';

const PerformanceDetails = ()=> {

    const classes = useStyles()
    const [list, setList] = useState([{}])

    useEffect(()=> {
        fetch('/pnlCounter')
        .then(response =>
            response.json()
        )
        .then(data =>
            setList(data.pnlCounter)
        );
    }, []);


    return (
        <Grid>
            {
                list.map((item, i) => {
                    return (
                        <Grid container key={i}>
                            <Grid item lg={6} md={6} sm={6} xs={6} align='left'>
                                <Typography className={classes.numeric}>
                                    {item.symbol}
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6} align='right'>
                                <Typography className={classes.numeric}>
                                    {item.PNL}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    );

}

export default PerformanceDetails;