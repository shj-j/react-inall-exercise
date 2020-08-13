import React from 'react';
import './home.less';
import { Link, NavLink } from 'react-router-dom';
import CalcPic from '../images/calculator.png';
import Timer from '../images/timer.png';

const Home = () => {
  return (
    <div className="home">
      <div className="billboard" >
        <h1 className="title">在线实用工具</h1>
      </div>
      <div className="content">
        <div className="picture_div">
          <img src={CalcPic} className="picture"></img>
          <img src={Timer} className="picture"></img>
        </div>
        <div className="link_div">         
          <NavLink className="link" to="/calculater">在线计算器</NavLink>
          <NavLink className="link" to="/counter">在线倒计时</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;