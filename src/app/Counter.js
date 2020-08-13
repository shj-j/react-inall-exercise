import React, { Component } from 'react';
import './home.less';
import { NavLink} from "react-router-dom";


class Counter extends Component{
  state={
    timer:0,
    isStart: false
  }
  handleClick=()=>{
    this.setState({
      isStart: !this.state.isStart,
    })
  }

  handleInput=(event)=>{
    this.setState({
      timer: event.target.value
    })
  }

  componentDidUpdate(){
    const {timer, isStart} = this.state;
    if(timer && isStart){
      setInterval(()=>this.setState({
        timer: this.state.timer - 1
      }),1000)
    }
  }
  render(){
    return(
      <div>
        <h1>在线倒计时器</h1>
        <div>
          <label>设置时间</label>
          <input type="text" required onChange={this.handleInput}/>
          <div style={{border:"2"}}>
            <p>{this.state.timer} seconds</p>
          </div>
        </div>
        <button onClick={this.handleClick}>start</button>
        <div>
          <NavLink  to="/">回到主页</NavLink>
        </div>

      </div>
    );
  }
}
export default Counter;