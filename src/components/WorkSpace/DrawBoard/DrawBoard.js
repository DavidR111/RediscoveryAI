import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as d3 from 'd3'

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
            selectedBoundPoints: [],
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
        const { updateScreenParam, setUpdateScreen } = this.props

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
        if (updateScreenParam) {
            this.updateScreen()
            setUpdateScreen({ value: false })
        }

        this.drawRects()
    }

    /**
     * DragStarted : Drag Event
     */
    dragstarted = (rect, index, element) => {
        let { drawMode } = this.props
        if (!drawMode || !rect.enable)
            return

        let { offset } = this.state
        let dx = d3.event.sourceEvent.offsetX,
            dy = d3.event.sourceEvent.offsetY

        d3.select(element[index]).raise().style('cursor', 'move');

        offset = { x: (dx), y: (dy) }
        this.setState({
            offset
        })
    }

    dragged = (rect, index, element) => {

        let { drawMode } = this.props
        if (!drawMode || !rect.enable)
            return

        const { offset } = this.state
        let dx = d3.event.sourceEvent.offsetX,
            dy = d3.event.sourceEvent.offsetY
        d3.select(element[index]).raise().style('cursor', 'normal')
        d3.select(element[index])
            .attr("transform", ("translate(" + (dx - offset.x) + "," + (dy - offset.y) + ")"))
    }

    dragended = (rect, index, element) => {

        let { drawMode, updateRect, setUpdateScreen } = this.props
        if (!drawMode || !rect.enable)
            return

        const { offset } = this.state
        d3.select(element[index]).raise().style('cursor', 'normal')
        let dx = d3.event.sourceEvent.offsetX,
            dy = d3.event.sourceEvent.offsetY
        d3.select(element[index])
            .attr("x", (dx - offset.x + rect.x1))
            .attr("y", (dy - offset.y + rect.y1))
            .attr("width", (rect.x2 - rect.x1))
            .attr("height", (rect.y2 - rect.y1))

        updateRect(
            {
                id: rect.id,
                x1: (dx - offset.x + rect.x1),
                y1: (dy - offset.y + rect.y1),
                x2: (dx - offset.x + rect.x2),
                y2: (dy - offset.y + rect.y2),
                enable: true
            })

        setUpdateScreen({ value: true })

        this.setState({
            offset: { x: 0, y: 0 },
        })
    }

    drawOneRect = (selection) => {

        selection.append('rect')
            .attr('x', (rectPos) => (rectPos.x1))
            .attr('y', (rectPos) => (rectPos.y1))
            .attr('width', (rectPos) => (rectPos.x2 - rectPos.x1))
            .attr('height', (rectPos) => (rectPos.y2 - rectPos.y1))
            .attr('stroke-width', 2)
            .attr('stroke', (rectPos) => (rectPos.enable ? 'rgb(67,176,101)' : 'grey'))
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
        const { svgBoard } = this.state
        let { rectLists } = this.props

        let dragHandler = d3.drag()
            .on('start', this.dragstarted)
            .on('drag', this.dragged)
            .on('end', this.dragended)

        svgBoard.selectAll('g')
            .data(rectLists).enter()
            .append('g')
            .call(this.drawOneRect)
            .call(dragHandler)
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

export default withStyles(styles, { withTheme: true })(DrawBoard)