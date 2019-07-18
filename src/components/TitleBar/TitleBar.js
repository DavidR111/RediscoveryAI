import React, { Component } from 'react'
import { AppBar, Button, Typography, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"

import styles from '../../constants/theme'

class TitleBar extends Component {
    render() {
        const { classes, toggleDrawer } = this.props
        return (
            <AppBar className={classNames(classes.appBar)}>
                <Toolbar disableGutters={true}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        className={classNames(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        className={classes.flexGrow}
                        align="left"
                        variant='h6'
                        component='h6'
                        color="inherit"
                        noWrap
                    >
                        Project Object Detectoin
                </Typography>

                    <div className={classes.subToolbar}>
                        <Button color="primary" className={classes.button}>
                            {"< PREVIOUS  "}
                        </Button>

                        <h5
                            style={{ color: "grey", marginLeft: "25px", marginRight: "25px" }}
                        >
                            {"2007_000175.jpg [2/2]"}
                        </h5>

                        <Button color="primary" className={classes.button}>
                            {"  NEXT >"}
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}


TitleBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TitleBar)