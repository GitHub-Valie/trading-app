import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { Grid } from '@material-ui/core';
// import ResAppBar from './components/ResAppBar/index';
import AppBar from './components/ResAppBar/AppBar';
import { useStyles } from './components/styles/styles';
import Home from './pages/Home';
import TradingBot from './pages/TradingBot';
import TradingCryptos from './pages/TradingCryptos';
import Strategy from './pages/Strategy';
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {

    const classes  = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Grid container className={classes.container_content}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        {/* <ResAppBar /> */}
                        <AppBar />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path="/dashboard" component={TradingBot} />
                                <Route path="/cryptos-exchange" component={TradingCryptos} />
                                <Route path="/trading-strategy" component={Strategy} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default App;
