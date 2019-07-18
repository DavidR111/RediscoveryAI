import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from '../theme'


class ImgToolBar extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classNames(classes.imgToolbar)}>
                ImgToolBar
            </div>
        )
    }
}

ImgToolBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ImgToolBar)