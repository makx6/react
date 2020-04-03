import React, { Component } from 'react';
import Wrap from './components/wrap'
import Button from './components/button';
import ModalWindow from './components/modal';
import Task from './components/task';

class App extends Component {

  state = {
    see: false,
    value: '',
    value1: '',
    taskName: [],
    taskDesk: [],
    bool: false
  }

  modalShow = (e) => {
    this.setState({
      see: !this.state.see
    });
  }

  click = (e) => {
    let target = e.target;
    if(target.tagName === 'BUTTON'){
      this.state.taskName.push(this.state.value1);
      this.state.taskDesk.push(this.state.value);
      this.setState({
        taskName: this.state.taskName,
        taskDesk: this.state.taskDesk,
        value: '',
        value1: ''
      })
    }
    this.modalShow();
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleChange1 = (e) => {
    this.setState({
      value1: e.target.value
    })
  }

  render() {

    const name = this.state.taskName.map((item,key) => {

      return (
        <Task identy={key} number={key + 1} taskName={item} taskDesk={this.state.taskDesk[key]} key={key}/> 
      )

    })

    return (
      <div className="container">
        <ModalWindow bool={this.state.bool} valu={this.state.value1} change={e => this.handleChange1(e)} chang={e => this.handleChange(e)} val={this.state.value} vision={!this.state.see} name={e => this.click(e)}/>
        <Wrap contents={name} vision={this.state.see}/>
        <Button value='+' classNames='button add-button' onPress={e => this.modalShow(e)}/>
      </div>
    );
  }
}

export default App;
