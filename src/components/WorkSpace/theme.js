const styles = theme => ({
    subToolbar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(43,45,65)',
        height: '40px'
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        paddingTop: '64px',
        paddingBottom: '0px',
        height: 'calc(100%)'
    },
    DrawBoard: {
        width: 'calc(100vw - 420px)',
        flexGrow: 1,
        backgroundColor: 'rgb(18,17,28)',
        //padding: '20px',
        height: 'calc(100vh - 64px)',

        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        maxWidth: '2000px',
        padding: '0'
    }
});

export default styles