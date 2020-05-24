import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import Content from './Content'
import PropTypes from 'prop-types'
import {Provider} from './react-redux'

function createStore(reducer){
  // 初始状态
  let state = null
  // 定义发布者
  const listeners = []
  // 绑定订阅者
  const subscribe = (listener)=>listeners.push(listener)
  // 获取 state
  const getState = () => state
  // 绑定处理函数
  const dispatch = (action)=>{
      state = reducer(state, action)
      // 数据更新自动通知给订阅者
      listeners.forEach(listener=>listener())
  }
  // 初始化
  dispatch({})
  // 返回状态管理对象
  return {getState, dispatch, subscribe}
}

const themeReducer = (state, action)=>{
  if(!state){
    return {
      themeColor: 'red'
    }
  }
  switch(action.type){
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor}
    default:
      return state
  }
}

const store = createStore(themeReducer);

class Index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);

