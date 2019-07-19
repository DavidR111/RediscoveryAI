import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Collapse, List, ListSubheader, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore, Visibility, VisibilityOff } from '@material-ui/icons'

import styles from './theme'

class RightSideBar extends Component {

    constructor(props) {
        super(props)
        this.state = { open: true }
    }

    handleSpread = () => {
        this.setState({ open: !this.state.open })
    }

    handleRectEnable = (id, enable) => {
        const { setRectEnable } = this.props
        setRectEnable({ id: id, enable: !enable })
    }

    render() {
        const { classes } = this.props
        const { rectLists } = this.props
        const { open } = this.state

        return (
            <section className={classes.rightSideBar}>
                <List className={classes.listBar} component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Nested List Items
                        </ListSubheader>
                    }>
                    <ListItem button onClick={this.handleSpread}>
                        <ListItemIcon className={classes.listIcon}>
                            <Visibility />
                        </ListItemIcon>
                        <ListItemText primary={`OBJECTS [${rectLists.length}]`} />
                        {!open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" className={classes.objectList} unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                rectLists.map((arect) => (
                                    <ListItem button
                                        key={arect.id}
                                        className={classes.nested}
                                        onClick={() => { this.handleRectEnable(arect.id, arect.enable) }} >
                                        <ListItemIcon className={classes.listIcon}>
                                            {arect.enable ? <Visibility /> : <VisibilityOff />}
                                        </ListItemIcon>
                                        <ListItemText primary={`OBJ ${arect.id}`} />
                                    </ListItem>))
                            }
                        </List>
                    </Collapse>
                </List>
            </section>
        )
    }
}

RightSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(RightSideBar)