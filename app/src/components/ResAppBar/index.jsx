import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, Link, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styleSheet = {
    list : {
        width : 225,
    },
    padding : {
        paddingRight : 30,
        fontFamily: 'BebasNeue-Regular',
        fontSize: 16,
        "&:hover": {
            textDecoration: "none",
            color: '#FDF41B',
            cursor : "pointer"
        },
    },

    sideBarIcon : {
        padding : 0,
        color : "white",
        cursor : "pointer",
    },

    appbar: {
        backgroundImage: "linear-gradient(45deg, #003B33, #003B33)",
    },

    title: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 22,
        color: '#ffffff',
        "&:hover": {
            textDecoration: "none",
            color: '#FDF41B',
            cursor : "pointer"
        },
    },

    link: {
        "&:hover": {
            textDecoration: "none",
            color: '#FDF41B',
            cursor : "pointer"
        },
        color: '#008875',
    }
}

class ResAppBar extends Component {
    constructor (props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount () {
        if (window.innerWidth <= 700) {
            this.setState({drawerActivate:true});
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 700) {
                this.setState({drawerActivate:true});
            }
            else {
                this.setState({drawerActivate:false})
            }
        });
    }

    //Small Screens
    createDrawer(){
        const {classes} = this.props
        return (
            <div>
                <AppBar position="sticky" className={classes.appbar}>
                    <Toolbar>
                        <Grid container direction = "row" justify = "space-between" alignItems="center">
                            <MenuIcon
                                className = {this.props.classes.sideBarIcon}
                                onClick={()=>{this.setState({drawer:true})}} />

                            <Link href="/" color="inherit" style={{flexGrow:1}} className={classes.link}>
                                <Typography color="inherit" className={classes.title}>
                                    Traderat
                                </Typography>
                            </Link>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer

                    open={this.state.drawer}
                    onClose={()=>{this.setState({drawer:false})}}
                    onOpen={()=>{this.setState({drawer:true})}}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={()=>{this.setState({drawer:false})}}
                        onKeyDown={()=>{this.setState({drawer:false})}}>

                        <List className = {this.props.classes.list}>
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
        );
    }

    //Larger Screens
    destroyDrawer(){
        const {classes} = this.props
        return (
            <AppBar position = "static" className={classes.appbar}>
                <Toolbar>
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

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);