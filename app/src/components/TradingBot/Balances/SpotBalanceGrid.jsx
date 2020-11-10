import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';

const SpotBalanceDetails = ()=> {

    const classes = useStyles()
    const [list, setList] = useState([{}])

    useEffect(()=> {
        fetch('/spotBalanceList')
        .then(response =>
            response.json()
        )
        .then(data =>
            setList(data.spotBalanceList)
        );
    }, []);


    return (
        <Grid>
            {
                list.map((item, i) => {
                    return (
                        <Grid container key={i}>
                            <Grid item lg={1} md={1} sm={1} xs={1} align="left">
                                <Typography className={classes.numeric}>
                                    {item.Asset}
                                </Typography>
                            </Grid>
                            <Grid item lg={11} md={11} sm={11} xs={11} align="right">
                                <Typography className={classes.numeric}>
                                    {item.Free}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    );

}

export default SpotBalanceDetails;