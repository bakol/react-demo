import React from 'react';
import './index.scss'
export default class Home extends React.Component {
  render() {
    return (
      <div className="headerTop">
        <div className="city clearfix">
          <span className="cityName">上海</span>
          <i className="iconfont icon icon-zhankai"></i>
        </div>
        <div className="searchBtn">
          <div className="_wrap clearfix">
            <i className="iconfont icon-sousuo icon"></i>
            <span className="placeholder">请输入项目名称</span>
          </div>
          <i className="iconfont changeBtn icon-ditu"></i>
        </div>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  componentDidMount() {
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
  }
}