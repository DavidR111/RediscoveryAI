import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from '../../constants/theme'

const LeftSideBar = props => {
    const { classes } = props;

    return (
        <section className={classes.leftSideBar}>
            <div className={classes.leftSideBarHeader} />
            <div className={classes.group}>...</div>
        </section>
    )
}

LeftSideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(LeftSideBar)
