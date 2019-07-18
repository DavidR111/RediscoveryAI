import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as d3 from 'd3'

import styles from '../theme'
import { clientAreaPos } from '../../../constants/functions'

class DrawBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svgBoard: null,
            sizeControl: false,
        }
    }

    componentDidMount() {
        const svgBoard = d3.select(this.refs.drawboard)
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
        this.setState({
            svgBoard
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div
                className={classNames(classes.DrawBoard)}
                ref='drawboard'
            >
            </div>
        )
    }
}


DrawBoard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DrawBoard)