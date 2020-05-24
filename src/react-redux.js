
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapState2Props, mapDispatch2Props)=>(OriginComponent)=>{
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(){
            super()
            this.state = {
                allProps: {}
            }
        }

        componentWillMount(){
            this._updateProps()
        }

        _updateProps(){
            const {store} = this.context

            let stateProps = mapState2Props? mapState2Props(store.getState(), this.props) : {}
            let dispatchProps = mapDispatch2Props? mapDispatch2Props(store.dispatch, this.props) : {}

            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
            // 绑定订阅者监听函数
            store.subscribe(this._updateProps.bind(this))
        }

        render() {
            return (
                <div>
                    <OriginComponent {...this.state.allProps}/>
                </div>
            )
        }
    }

    return Connect
}

class Provider extends Component {

    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }
    
    getChildContext(){
        return {store: this.props.store}
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export {Provider}