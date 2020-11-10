import React from 'react';
// import BATCard from '../components/TradingCryptos/Cards/ItemBAT';
// import XRPCard from '../components/TradingCryptos/Cards/ItemXRP';
import { Grid, Typography } from '@material-ui/core';
import CryptosPaper from '../components/Cryptocurrencies/CryptosPaper';
import WalletPaper from '../components/Cryptocurrencies/WalletPaper';
import { useStyles } from '../components/styles/styles';

const TradingCryptos = () => {

    const classes = useStyles();

    return (
        <Grid container>

            <Grid item lg={12} md={12} sm={12} xs={12}>
                <WalletPaper />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <CryptosPaper />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.footer}>
                <Typography variant="body1" color="inherit">
                    &copy; 2020 ValentinLHB
                </Typography>
            </Grid>

        </Grid>
    );
}

export default TradingCryptos;