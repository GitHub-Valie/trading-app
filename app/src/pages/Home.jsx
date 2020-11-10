import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../components/styles/styles';
import StrategyCard from '../components/Home/StrategyCard';
import TradingCryptosCard from '../components/Home/CryptocurrenciesCard';
import TradingBotCard from '../components/Home/TradingBotCard';
import About from '../components/Home/About';
import ToolsUsed from '../components/Home/ToolsUsed';
import ContactPaper from '../components/Home/Contact';

const Home = () => {

    const classes = useStyles();

    return (
        <Grid container>

            <Grid item lg={2} md={0} sm={0} xs={0}>

            </Grid>

            <Grid item lg={8} md={12} sm={12} xs={12}>
                <Grid container alignItems='stretch'>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <TradingBotCard />
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <StrategyCard />
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <TradingCryptosCard />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <About />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ToolsUsed />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ContactPaper />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2} md={0} sm={0} xs={0}></Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.footer}>
                <Typography variant="body1" color="inherit">
                    &copy; 2020 ValentinLHB
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Home;