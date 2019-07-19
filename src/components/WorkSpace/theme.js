const styles = theme => ({
    subToolbar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(43,45,65)',
        height: '40px'
    },
    content: {
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0,
        height: "calc(100% - 56px)",
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64
        }
    },
    DrawBoard: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: 'rgb(18,17,28)',
        padding: 0,
        height: "calc(100% - 130px)"
    },
    imgToolbar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(32,33,48)',
        height: '90px',
        borderRight: '1px solid'
    }
});

export default styles