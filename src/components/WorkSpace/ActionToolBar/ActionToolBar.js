import React, { Component } from 'react'

import { AppBar, Button, Typography, Toolbar, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from '../../constants/theme'


class ActionToolBar extends Component {
    render() {
        const { classes } = this.props
        return (
            <AppBar className={classNames(classes.appBar)}>
                ...
            </AppBar>
        )
    }
}

ActionToolBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ActionToolBar)