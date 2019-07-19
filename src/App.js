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
	setRectEnable
} from './redux/actions/object.action'

class App extends Component {
	render() {
		const { classes } = this.props

		const { drawMode, rectLists } = this.props  // mapStateToProps
		const { setMode, pushRect, updateRect, setRectEnable } = this.props    // mapDispatchToProps

		return (
			<div className={classes.root} >
				<div className={classes.appFrame}>
					<TitleBar />
					<LeftSideBar drawMode={drawMode} setMode={setMode} />
					<WorkSpace
						drawMode={drawMode}
						rectLists={rectLists}
						pushRect={pushRect}
						updateRect={updateRect} />
					<RightSideBar rectLists={rectLists} setRectEnable={setRectEnable} />
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
	rectLists: state.objState.rectLists
})

const mapDispatchToProps = {
	setMode,
	updateRect,
	pushRect,
	setRectEnable
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withStyles(styles, { withTheme: true })(compose(withConnect)(App))