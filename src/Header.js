import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class Header extends Component {

    static propTypes = {
        themeColor: PropTypes.string
    }


    render() {
        return (
            <div>
                <h1 style={{color: this.props.themeColor}}>动手实现React-Redux</h1>
            </div>
        )
    }
}

const mapState2Props = (state)=>{
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapState2Props)(Header)

export default Header;
