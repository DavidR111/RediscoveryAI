const styles = theme => ({
    subToolbar: {
        display: 'flex',
        flexWrap: 'nowrap'
    },
    appBar: {
        //        position: "absolute",
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(43,45,65)',

        // App bar - closing
        /*transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
            // duration: 2000
        })*/
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 16
    },
    profileLogo: {
        marginRight: `${theme.spacing(1)}px`
    },
    flexGrow: {
        flexGrow: 1
    },
    button: {
        color: 'white'
    }
});

export default styles