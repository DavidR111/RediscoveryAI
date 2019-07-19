import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import classNames from "classnames"
import styles from './theme'

class LeftSideBar extends Component {
    onClick = () => {
        const { setMode, drawMode } = this.props
        setMode(!drawMode)
    }
    render() {
        const { classes, drawMode } = this.props
        return (
            <section className={classes.leftSideBar}>
                <div className={classes.leftSideBarHeader} />
                <button className={drawMode ? classes.dots : classNames(classes.dots, classes.dotsClicked)} onClick={this.onClick}> ... </button>
            </section>
        )
    }
}

LeftSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(LeftSideBar)
