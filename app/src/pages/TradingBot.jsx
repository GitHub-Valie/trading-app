import React from 'react';
import { Grid } from '@material-ui/core';
import BalancePaper from '../components/TradingBot/Balances/index';
import ChartPaper from '../components/TradingBot/ChartPaper/index';
import FuturesPositionsPaper from '../components/TradingBot/FuturesPositionsPaper/index';
import PerformancePaper from '../components/TradingBot/PerformancePaper/index';
import TradesCounterPaper from '../components/TradingBot/TradesCounterPaper/index';
import GeneralInfoPaper from '../components/TradingBot/GeneralInfoPaper/index';
import BestTradePaper from '../components/TradingBot/BestTradePaper/index';

const TradingBot = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Grid container>
                        
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <BalancePaper />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <PerformancePaper />
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TradesCounterPaper />
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <FuturesPositionsPaper />
                        </Grid>

                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <GeneralInfoPaper />
                        </Grid>
                        
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <BestTradePaper />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ChartPaper />
                </Grid>
            </Grid>

        </>
    );
}

export default TradingBot;