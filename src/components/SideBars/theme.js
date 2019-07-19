const switcherWidth = 60;
const groupSize = switcherWidth - 4 * 2 * 2;

const styles = theme => ({
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
    dots: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${groupSize}px`,
        height: `${groupSize}px`,
        marginBottom: `${theme.spacing(2)}px`,
        borderRadius: "20%",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "rgba(250, 250, 250, 0.8)",
        cursor: "pointer",
        border: '0px',
        "&:hover": {
            backgroundColor: "rgba(180, 180, 180, 0.5)"
        }
    },
    dotsClicked: {
        backgroundColor: "rgba(120, 120, 120, 0.5)",
        color: 'white'
    },
    listBar: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'rgb(32,33,48)',
        color: 'white'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    listIcon: {
        color: 'grey'
    },
    objectList: {
        overflow: 'auto',
        height: 'calc(100vh - 100px)'
    }
});

export default styles