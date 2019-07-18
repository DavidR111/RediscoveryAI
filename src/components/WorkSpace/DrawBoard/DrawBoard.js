import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as d3 from 'd3'

import { pushRect } from '../../../redux/actions/object.action'

import styles from '../theme'
import {
    clientAreaPos,
    generateRect
} from '../../../constants/functions'

class DrawBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svgBoard: null,
            sizeControl: false,
            drawPoints: []
        }
    }

    /**
     * Init SVG
     */
    componentDidMount() {
        const svgBoard = d3.select(this.refs.drawboard)
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
        this.setState({
            svgBoard
        })
    }

    /**
     * Append Draw Points ( Occured when mouseDown )
     */
    appendDrawPoints = (pt) => {
        let { drawPoints } = this.state
        if (drawPoints.length < 4) {
            drawPoints.push(pt)
            if (drawPoints.length === 4) {
                alert("adf")
                const rect = generateRect(drawPoints)
                const { pushRect } = this.props
                pushRect(rect)
                drawPoints = []
            }
            this.setState({ drawPoints })
        }
    }

    /**
     * mouseDown Handler on Div : To Draw and Scale Rect
     */
    onMouseDown = (e) => {
        const { drawMode } = this.props

        if (!drawMode) {
            const pt = clientAreaPos(e)
            this.appendDrawPoints(pt)
        } else {

        }
    }

    /**
     * render Method
     */
    render() {
        const { classes } = this.props
        return (
            <div
                className={classNames(classes.DrawBoard)}
                onMouseDown={this.onMouseDown}
                ref='drawboard'
            >
            </div>
        )
    }
}

DrawBoard.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        drawMode: state.objState.mode
    }
}

const mapDispatchToProps = {
    pushRect
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withStyles(styles, { withTheme: true })(compose(withConnect)(DrawBoard))