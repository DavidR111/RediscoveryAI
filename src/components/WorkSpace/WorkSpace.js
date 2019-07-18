import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles"

import ActionToolBar from './ActionToolBar/ActionToolBar'
import DrawBoard from './DrawBoard/DrawBoard'
import ImgToolbar from './ImgToolBar/ImgToolBar'

import styles from './theme'

class WorkSpace extends Component {
    render() {
        const { classes } = this.props
        return (
            <main className={classes.content}>
                <ActionToolBar />
                <DrawBoard />
                <ImgToolbar />
            </main>
        )
    }
}

export default withStyles(styles, { withTheme: true })(WorkSpace)