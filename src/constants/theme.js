const switcherWidth = 60;
const groupSize = switcherWidth - 4 * 2 * 2;

const styles = theme => ({
    root: {
        height: "100vh",
        zIndex: 1,
        overflow: "hidden",
        minWidth: '700px'
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%"
    },
    content: {
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0,
        height: "calc(100% - 56px)",
        marginTop: 56,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64
        }
    },

    leftSideBar: {
        width: `${switcherWidth}px`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
        flexGrow: 1,
        padding: `${theme.spacing(2)}px 0`,
        backgroundColor: 'rgb(32,33,48)'
    },
    rightSideBar: {
        width: `${switcherWidth * 6}px`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
        flexGrow: 1,
        padding: `${theme.spacing(2)}px 0`,
        backgroundColor: 'rgb(32,33,48)'
    },
    leftSideBarHeader: {
        ...theme.mixins.toolbar
    },
    group: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${groupSize}px`,
        height: `${groupSize}px`,
        marginBottom: `${theme.spacing(2)}px`,
        borderRadius: "20%",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "rgba(150, 150, 150, 0.5)",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
    },
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