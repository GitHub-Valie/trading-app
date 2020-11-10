import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';

const GeneralInfoDetails = ()=> {

    const classes = useStyles()
    const [generalInfo, setGeneralInfo] = useState([{}])

    useEffect(()=> {
        fetch('/generalInfo')
        .then(response =>
            response.json()
        )
        .then(data =>
            setGeneralInfo(data.generalInfo)
            // console.log(data.generalInfo)
        );
    }, []);

    return (

            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                        {generalInfo.starting_funds}
                    </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                        {generalInfo.total_commissions}
                    </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                        {generalInfo.uptime}
                    </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                        {generalInfo.strategy}
                    </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                        {generalInfo.candle_size}
                    </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                        {generalInfo.stop_loss}
                    </Typography>
                </Grid>
            </Grid>

    );

}

export default GeneralInfoDetails;