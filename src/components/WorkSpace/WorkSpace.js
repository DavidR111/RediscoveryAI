import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles"
import styles from './constants/theme'

class WorkSpace extends Component {
    render() {
        const { classes } = this.props
        return (
            <main className={classes.content}>
            </main>
        )
    }
}

export default withStyles(styles, { withTheme: true })(WorkSpace)