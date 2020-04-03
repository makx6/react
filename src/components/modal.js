import React, { Component } from 'react';
import Button from './button'

class ModalWindow extends Component {

  render(){
    return(
      <div change={this.props.change} chang={this.props.chang} valu={this.props.valu} val={this.props.val} name={this.props.func} className='all-center' style={{display: this.props.vision ? 'none' : 'flex',width: '100%',height: '100vh', paddingBottom: '130px'}}>
        <div className="modal-block" style={{opacity: this.props.vision ? '0' : '1'}}>
          <div className="task-title all-center">
            <h2>Добавить задачу</h2>
            <Button onPress={this.props.name} value='Добавить задачу' classNames='button'/>
            <input placeholder='НАЗВАНИЕ' value={this.props.valu} onChange={this.props.change} className='input-name'/>
            <textarea placeholder='Описание задачи' className="modal-textarea" value={this.props.val} onChange={this.props.chang}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalWindow;