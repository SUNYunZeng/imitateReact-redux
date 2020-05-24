import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        handleThemeSwitchClick: PropTypes.func
    }

    render() {
        return (
            <div>
                <button 
                style={{color: this.props.themeColor}}
                onClick={this.props.handleThemeSwitchClick.bind(this, 'red')}
                >Red</button>
                <button 
                style={{color: this.props.themeColor}}
                onClick={this.props.handleThemeSwitchClick.bind(this, 'blue')}
                >Blue</button>
            </div>
        )
    }
}

const mapState2Props = (state)=>{
    return {
        themeColor: state.themeColor
    }
}

const mapDispatch2Props = (dispatch)=>{
    return {
        handleThemeSwitchClick : function(color){
            dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })}
    }
}

ThemeSwitch = connect(mapState2Props, mapDispatch2Props)(ThemeSwitch)

export default ThemeSwitch;