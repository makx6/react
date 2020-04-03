import React, { Component } from 'react';
import Button from './button';

class Task extends Component {

  state = {
    bool: true,
    butBool: true
  }

  clickOnTask = (e) => {
    this.setState({
      bool: !this.state.bool
    });
  };

  succes = (e) => {
    this.setState({
      butBool: !this.state.butBool
    })
  }
  
  render(){
    return(
      <div identy={this.props.identy} onClick={(e) => this.clickOnTask(e)} className={this.state.bool ? 'task all-center h100' : 'task all-center hn'}>
        <div className="task-title all-center">
          <h2><span>{this.props.number}</span>) {this.props.taskName}</h2>
          <Button ident={this.props.identy} classNames={this.state.butBool ? 'button' : 'button succes'} value={this.state.butBool ? 'Done' : `✅`} onPress={e => this.succes(e)}/>
          <div className="description">
            <React.Fragment>
              {this.props.taskDesk}
            </React.Fragment>
          </div>
        </div>
      </div>
    )
  }
}

export default Task;