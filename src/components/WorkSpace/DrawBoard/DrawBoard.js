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
            drawPoints: [],
            offset: null
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
     * componentDidUpdate: Draw SVG elements
     */
    componentDidUpdate() {

        const { svgBoard, drawPoints } = this.state

        svgBoard.selectAll('g')
            .data(drawPoints).enter()
            .append('rect')
            .attr('x', (point) => (point.x - 5))
            .attr('y', (point) => (point.y - 5))
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', 'green')
            .attr('id', 'DRAWPOINTS')


        if (drawPoints.length === 4) {
            this.setState({ drawPoints: [] })
            this.eraseDrawPoints()
        }

        this.drawRects()
    }

    /**
     * DragStarted : Drag Event
     */
    dragstarted = (shape, index, element) => {
        let { offset } = this.state
        //d3.select(element[index]).raise().style('cursor', 'move');
        let dx = d3.event.sourceEvent.offsetX, dy = d3.event.sourceEvent.offsetY
        //console.log('started');
        offset = { x: (dx - shape[0].x), y: (dy - shape[0].y) }

        this.setState({
            offset
        })
    }

    dragged = (shape, index, element) => {
        const { offset } = this.state
        let dx = d3.event.sourceEvent.offsetX, dy = d3.event.sourceEvent.offsetY;

        console.log(index)

        d3.select(element[index])
            .attr("transform", ("translate(" + (dx - offset.x) + "," + (dy - offset.y) + ")"))
    }

    dragended = (shape, index, element) => {
        const { offset } = this.state
        d3.select(element[index]).raise().style('cursor', 'normal')
        let dx = d3.event.sourceEvent.offsetX, dy = d3.event.sourceEvent.offsetY
        //console.log('drag end', index);
        /*        this.props.updateRect(index,
                    [{ x: (dx - moveOffset.x), y: (dy - moveOffset.y) },
                    { x: (dx - moveOffset.x + shape[1].x - shape[0].x), y: (dy - moveOffset.y + shape[1].y - shape[0].y) }]);*/
        this.drawRects()

        this.setState({
            moveOffset: null,
        })
    }

    drawOneRect = (selection) => {

        selection.append('rect')
            .attr('x', (rectPos) => (rectPos.x1))
            .attr('y', (rectPos) => (rectPos.y1))
            .attr('width', (rectPos) => (rectPos.x2 - rectPos.x1))
            .attr('height', (rectPos) => (rectPos.y2 - rectPos.y1))
            .attr('stroke-width', 2)
            .attr('stroke', 'rgb(67,176,101)')
            .attr('stroke-dasharray', "5,5")
            .attr('fill', 'rgba(255,255,255,0)')

        selection.append("text")
            .attr("x", (rectPos) => (rectPos.x1 + 5))
            .attr("y", (rectPos) => (rectPos.y1 - 25))
            .attr('fill', 'white')
            .style('text-weight', "bold")
            .text((rectPos) => (`OBJ ${rectPos.id}`));

        selection.append('rect')
            .attr('x', (rectPos) => (rectPos.x1))
            .attr('y', (rectPos) => (rectPos.y1 - 20))
            .attr('width', 80)
            .attr('height', 20)
            .attr('rx', '5')
            .attr('fill', 'rgb(67,176,101)');

        selection.append("text")
            .attr("x", (rectPos) => (rectPos.x1 + 5))
            .attr("y", (rectPos) => (rectPos.y1 - 5))
            .attr('fill', 'white')
            .style('text-weight', "bold")
            .text("0 Classes");
    }

    /**
     * Draw Rects
     */

    drawRects = () => {
        let { rectLists } = this.props
        const { svgBoard } = this.state

        svgBoard.selectAll('g')
            .data(rectLists).enter()
            .append('g')
            .call(this.drawOneRect)
    }

    eraseDrawPoints = () => {
        const { svgBoard } = this.state
        svgBoard.selectAll('#DRAWPOINTS').remove()
    }

    updateScreen = () => {
        const { svgBoard } = this.state
        svgBoard.selectAll('g')
            .remove()
    }

    /**
     * Append Draw Points ( Occured when mouseDown )
     */
    appendDrawPoints = (pt) => {
        let { drawPoints } = this.state
        //console.log(drawPoints)

        if (drawPoints.length < 4) {
            this.updateScreen()
            drawPoints.push(pt)
            if (drawPoints.length === 4) {
                const rect = generateRect(drawPoints)
                const { pushRect } = this.props
                pushRect(rect)
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

const mapStateToProps = state => ({
    drawMode: state.objState.mode,
    rectLists: state.objState.rectLists
})

const mapDispatchToProps = {
    pushRect
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withStyles(styles, { withTheme: true })(compose(withConnect)(DrawBoard))