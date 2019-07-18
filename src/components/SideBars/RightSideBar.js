import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from '../../constants/theme'

class RightSideBar extends Component {
    render() {
        const { classes } = this.props
        return (
            <section className={classes.rightSideBar}>
            </section>
        )
    }
}

RightSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(RightSideBar)