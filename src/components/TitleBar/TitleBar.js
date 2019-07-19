import React, { Component } from 'react'
import { AppBar, Button, Typography, Toolbar, IconButton } from '@material-ui/core'
import { School } from '@material-ui/icons'

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"

import styles from './theme'

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
                        <School />
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