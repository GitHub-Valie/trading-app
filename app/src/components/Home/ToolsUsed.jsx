import React from 'react';
import {
    Paper, Grid, Typography, Link
} from '@material-ui/core';
import { useStyles } from '../styles/styles';


const ToolsUsed = () => {
    

    const classes = useStyles();

    return (       
        <Paper elevation={4} className={classes.about_paper}>
        
            <Grid container>

                <Grid item lg={12} md={12} sm={12} xs={12}>

                    <Typography className={classes.about_title}>
                        Tools used
                    </Typography>

                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={4}>

                    <Typography className={classes.about_link_typo}>
                        <Link 
                        href="https://palletsprojects.com/p/flask/"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                            Flask
                        </Link>
                    </Typography>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>

                    <Typography className={classes.about_link_typo}>
                        <Link 
                        href="https://www.backtrader.com/"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                            Backtrader
                        </Link>
                    </Typography>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>

                    <Typography className={classes.about_link_typo}>
                        <Link 
                        href="https://github.com/sammchardy/python-binance/blob/master/README.rst"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                            Python-Binance
                        </Link>
                    </Typography>

                </Grid>
                
                <Grid item lg={4} md={4} sm={4} xs={4}>

                    <Typography className={classes.about_link_typo}>
                        <Link 
                            href="https://reactjs.org/"
                            style={{flexGrow:1}} 
                            className={classes.about_link}>
                        React JS
                        </Link>
                    </Typography>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>

                    <Typography className={classes.about_link_typo}>
                        <Link 
                        href="https://v3.material-ui.com/"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                        Material UI
                        </Link>
                    </Typography>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>

                    <Typography className={classes.about_link_typo}>
                        <Link 
                        href="https://www.tradingview.com/lightweight-charts/"
                        style={{flexGrow:1}} 
                        className={classes.about_link}>
                            Lightweight Charts
                        </Link>
                    </Typography>

                </Grid>

            </Grid>

        </Paper>
    )

}

export default ToolsUsed;
