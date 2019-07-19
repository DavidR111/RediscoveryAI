import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './theme'

class LeftSideBar extends Component {
    render() {

        const { classes } = this.props;
        return (
            <section className={classes.leftSideBar}>
                <div className={classes.leftSideBarHeader} />
                <button className={classes.dots} >...</button>
            </section>
        )
    }
}

LeftSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(LeftSideBar)
