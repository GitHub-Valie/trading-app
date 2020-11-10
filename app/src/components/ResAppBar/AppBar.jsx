import React, { useEffect, useState } from 'react';
import { useStyles } from '../styles/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  List,
  ListItem,
  Grid,
  SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logo192.png';

const ResponsiveAppBar = () => {

  const [drawerActivate, setDrawerActivate] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setDrawerActivate(true);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 700) {
        setDrawerActivate(true);
      }
      else {
        setDrawerActivate(false);
      }
    });

  }, []);

  const createDrawer = () => {
    return (
      <div>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <MenuIcon
                className = {classes.sideBarIcon}
                onClick={()=>{setDrawer(true)}}
              />
              <Link href="/" color="inherit" style={{flexGrow:1}} className={classes.link}>
                <Typography color="inherit" className={classes.title}>
                  Traderat
                </Typography>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={drawer}
          onClose={()=>{setDrawer(false)}}
          onOpen={()=>{setDrawer(true)}}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=>{setDrawer(false)}}
            onKeyDown={()=>{setDrawer(false)}}
          >
            <List className = {classes.list}>
              <ListItem key = {2} button divider href="/dashboard">
                <Link href="/dashboard" className={classes.padding}>
                  <Typography className={classes.padding}>
                    Dashboard
                  </Typography>
                </Link>
              </ListItem>
              <ListItem key = {1} button divider>
                <Link href="/trading-strategy" className={classes.padding}>
                  <Typography className={classes.padding}>
                    Trading strategy
                  </Typography>
                </Link>
              </ListItem>
              <ListItem key = {2} button divider href="/cryptos-exchange">
                <Link href="/cryptos-exchange" className={classes.padding}>
                  <Typography className={classes.padding}>
                    Cryptos & Exchange
                  </Typography>
                </Link>
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    )
  }

  const destroyDrawer = () => {
    return (
      <AppBar position = "static" className={classes.appbar}>
        <Toolbar>
          <img src={Logo} alt="Logo" className={classes.logo} />
          <Link href="/" color="inherit" style={{flexGrow:1}} className={classes.link}>
            <Typography color="inherit" align='left' className={classes.title}>
              Traderat
            </Typography>
          </Link>
          <Link href="/dashboard" color="inherit" className={classes.link}>
            <Typography className = {classes.padding}  >
              Dashboard
            </Typography>
          </Link>
          <Link href="/trading-strategy" color="inherit" className={classes.link}>
            <Typography className = {classes.padding}  >
              Trading strategy
            </Typography>
          </Link>
          <Link href="/cryptos-exchange" color="inherit" className={classes.link}>
            <Typography className = {classes.padding}  >
              Cryptos & Exchange
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }

  return drawerActivate ? (
    createDrawer() 
    )
    : (
    destroyDrawer()
  );
}

export default ResponsiveAppBar;