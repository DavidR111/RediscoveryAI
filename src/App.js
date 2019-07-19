import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

import TitleBar from './components/TitleBar/TitleBar'
import LeftSideBar from './components/SideBars/LeftSideBar'
import RightSideBar from './components/SideBars/RightSideBar'
import WorkSpace from './components/WorkSpace/WorkSpace'
import styles from './constants/theme'

import {
	setMode,
	updateRect,
	pushRect,
	setRectEnable,
	setUpdateScreen,
	setSelectedIndex
} from './redux/actions/object.action'

class App extends Component {
	render() {
		const { classes } = this.props

		const { drawMode, rectLists, updateScreenParam, selectedIndex } = this.props  // mapStateToProps
		const { setMode, pushRect, updateRect, setRectEnable, setUpdateScreen, setSelectedIndex } = this.props    // mapDispatchToProps

		return (
			<div className={classes.root} >
				<div className={classes.appFrame}>
					<TitleBar />
					<LeftSideBar drawMode={drawMode} setMode={setMode} />
					<WorkSpace
						className={classes}
						drawMode={drawMode}
						rectLists={rectLists}
						pushRect={pushRect}
						updateRect={updateRect}
						updateScreenParam={updateScreenParam}
						setUpdateScreen={setUpdateScreen}
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex} />
					<RightSideBar rectLists={rectLists} setRectEnable={setRectEnable} setUpdateScreen={setUpdateScreen} />
				</div>
			</div>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
	drawMode: state.objState.mode,
	rectLists: state.objState.rectLists,
	updateScreenParam: state.objState.updateScreenParam,
	selectedIndex: state.objState.selectedIndex
})

const mapDispatchToProps = {
	setMode,
	updateRect,
	pushRect,
	setRectEnable,
	setUpdateScreen,
	setSelectedIndex
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withStyles(styles, { withTheme: true })(compose(withConnect)(App))