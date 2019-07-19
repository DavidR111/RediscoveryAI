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
        backgroundColor: "rgba(150, 150, 150, 0.5)",
        cursor: "pointer",
        border: '0px',
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }
    }
});

export default styles