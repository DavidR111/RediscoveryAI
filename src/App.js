import React, { Component } from 'react';

import TitleBar from './components/TitleBar/TitleBar'
import LeftSideBar from './components/SideBars/LeftSideBar'
import RightSideBar from './components/SideBars/RightSideBar'
import WorkSpace from './components/WorkSpace/WorkSpace'

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import styles from './constants/theme'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root} >
        <div className={classes.appFrame}>
          <TitleBar />
          <LeftSideBar />
          <WorkSpace />
          <RightSideBar />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(App)