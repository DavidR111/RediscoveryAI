import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles"

import DrawBoard from './DrawBoard/DrawBoard'

import styles from './theme'

class WorkSpace extends Component {
    render() {
        const { classes } = this.props
        const { drawMode, rectLists, updateScreenParam, setUpdateScreen, selectedIndex, setSelectedIndex } = this.props
        const { pushRect, updateRect } = this.props
        return (
            <main className={classes.content}>
                <DrawBoard
                    drawMode={drawMode}
                    rectLists={rectLists}
                    pushRect={pushRect}
                    updateRect={updateRect}
                    updateScreenParam={updateScreenParam}
                    setUpdateScreen={setUpdateScreen}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex} />
            </main>
        )
    }
}

export default withStyles(styles, { withTheme: true })(WorkSpace)