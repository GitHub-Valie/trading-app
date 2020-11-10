import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    media: {
        height: 140,
    },
    bottom_appbar: {
        // height: '70px',
        top: 'auto',
        bottom: 0,
        // display: 'flex',
        // position: 'bottom' //fixed //absolute //relative //static
        // gridRowStart: 2,
        // gridRowEnd: 3
        flexShrink: 0,
    },
    chart_buttons: {
        variant: "contained",
        backgroundColor: "#ffffff",
        color: '#820957',
        fontFamily: 'BebasNeue-Regular',
    },
    chart_paper: {
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "#ffffff"
    },
    chart_tab: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 20
    },
    column_title: {
        color: '#008875',
        fontFamily: 'BebasNeue-Regular',
        fontSize: 16,
        "&:hover": {
            color: '#b2dbd5',
            cursor : "default"
        },
    },
    copyright_footer: {
        display: 'flex',
        flexDirection: 'column',
    },
    copyright_footer_container: {
        flex: '1em',
    },
    container_content: {
        content: 'flex 1 0 auto',
    },
    about_paper : {
        margin: "1rem",
        padding: "1.5rem",
        backgroundColor: "#008875",
    },
    about_button: {
        backgroundColor: '#FDF41B',
        color: '#008875',
        fontFamily: 'BebasNeue-Regular',
        // margin: '1em',
        // padding: '1em'
    },
    about_title : {
        color: '#FDF41B', 	
        fontFamily: 'BebasNeue-Regular',
        fontSize: 26,
        marginBottom: '1em',
        "&:hover": {
            cursor : "default"
        },
    },
    about_text : {
        color: "#e6e5ed",
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        marginBottom: '1em',
        "&:hover": {
            cursor : "default"
        },
    },
    paper: {
        margin: "1rem",
        padding: "1rem",
        backgroundColor: theme.palette.primary.main,
        backgroundImage: "linear-gradient(45deg, #003B33, #003B33)",
    },
    card: {
        margin: "1rem",
        // minHeight: '50vh'
        backgroundColor: '#008875',
        transition: '0.5s',
        "&:hover": {
            backgroundColor: "#003B33",
        },
    },
    card_button: {
        justifyContent: 'center',
        "&:hover": {
            cursor : "default"
        },
        // marginTop: 'auto',
    },
    card_button_text: {
        fontFamily: 'Roboto',
        color: '#FDF41B',
        fontSize: 12,
        letterSpacing: '0.3em'
    },
    home_card_container: {
        // marginTop: '1em',
    },
    paper_title: {
        color: '#FDF41B', 	
        fontFamily: 'BebasNeue-Regular',
        fontSize: 22,
        "&:hover": {
            cursor : "default"
        },
    },
    text_title : {
        fontSize: 40,
        color: '#003B33', 	
        fontFamily: 'BebasNeue-Regular',
        marginBottom: '1em',
        marginTop: '1em',
        "&:hover": {
            cursor : "default"
        },
    },
    text_subtitle : {
        color: '#008875',
        fontFamily: 'BebasNeue-Regular',
        fontSize: 26,
        marginBottom: "1em",
        "&:hover": {
            cursor : "default"
        },
    },
    text_body : {
        color: '#7f9d99',
        fontSize: 20,
        marginBottom: '2em',
        fontFamily: 'Roboto-Light',
        "&:hover": {
            cursor : "default"
        },
    },
    card_title: {
        color: '#FDF41B',
        fontFamily: 'BebasNeue-Regular',
        fontSize: 22,
        marginBottom: '1em',
        "&:hover": {
            cursor : "default"
        },
    },
    card_body: {
        color: '#e5ebea',
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        "&:hover": {
            cursor : "default"
        },
        // marginBottom: '1em',
    },
    numeric: {
        fontFamily: 'RobotoMono-Light',
        color: '#e5ebea',
        "&:hover": {
            cursor : "default"
        },
    },
    footer: {
        align: 'centered',
        backgroundColor: '#003B33',
        padding: '1.5em',
        margin: 0,
        color: '#fff'
    },
    tabs: {
        fontFamily: 'BebasNeue-Regular',
    },
    about_link: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: '#FDF41B',
            cursor : "pointer",
        },
    },
    about_link_typo: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 20
    },

    //AppBar styles
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
    },
    logo: {
        width: '3%',
        height: 'auto',
        marginRight: '0.2em',
    },
}));

// #3c2ed1 background color 1
// #6d37af background color 2
// #e9ebff paper color 1
// #ffffff paper color 2
// #4b4ca0 write color 1
// "#fb5335" write color 2
// #c12d7c write color 3