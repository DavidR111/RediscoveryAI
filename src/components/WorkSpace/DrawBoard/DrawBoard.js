import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from '../theme'

class DrawBoard extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classNames(classes.DrawBoard)}>
                ...
            </div>
        )
    }
}

DrawBoard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DrawBoard)