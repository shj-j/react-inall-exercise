import React, { Component } from 'react';
import './Caculater.less';

class Calculater extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            inputs:'',
            result:0,
        }
        this.keyboard = ['+','-','*',1,2,3,4,5,6,7,8,9,0,'=','clear'],
        this.firstNum = '',
        this.secondNum = '',
        this.op = "",
        this.handleInput = this.handleInput.bind(this)

    }
    handleInput=(event)=>{
        console.log(event.target.value)
        const curInput = event.target.value;
        if (curInput === "clear"){
            this.setState({
                inputs: '',
            })
        }else if( curInput === '-' || curInput === '+' || curInput === '*' ){
            this.op= curInput
            console.log("not num: ", this.op)
            this.setState({
                inputs: this.state.inputs+curInput,
            })
        }else if(curInput === "="){
            console.log("equal")
            if(this.op === "+"){
                this.setState({
                    inputs: +this.firstNum + +this.secondNum
                })
            }
            if(this.op === "-"){
                this.setState({
                    inputs: this.firstNum - this.secondNum
                })
            }
            if(this.op === "*"){
                this.setState({
                    inputs: this.firstNum * this.secondNum
                })
            }
            console.log("this op: ", this.op)
        }else{
            this.firstNum === '' ? this.firstNum = curInput : this.secondNum = curInput
            console.log("firstname", this.firstNum, " seconde: ", this.secondNum)
            this.setState({
                inputs: this.state.inputs+curInput,
            })
        }
    }

    render(){
        return (
            <div className="calculater">
                <h1>在线计算器</h1>
                <div className="result_div"> 
                    <input className="result_input" readOnly type="text" value = {this.state.inputs}/>
                </div>
                <div className="keyboard_div">
                    {this.keyboard.map(num=>(
                        <input value={num} className="keyboard" type="button" onClick={this.handleInput}/>
                    ))}
                </div>
            </div>
        );
    }
};

export default Calculater;