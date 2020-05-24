import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import {connect} from './react-redux'

class Content extends Component {

    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <div>
                <p style={{color: this.props.themeColor}}>React-Redux 的内容</p>
                <ThemeSwitch/>
            </div>
        )
    }
}

const mapState2Props = (state)=>{
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapState2Props)(Content)

export default Content