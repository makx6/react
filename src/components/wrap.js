import React, { Component } from 'react';


class Wrap extends Component {

  state = {
    bool: true
  }


  render(){
    return(
      <div className="wrap" style={{opacity: this.props.vision ? '0' : '1'}}>
        <div className="wrap-header all-center">
          <h1>TO DO</h1>
        </div>
        <div className="container-for-tasks">
          {this.props.contents}
        </div>
      </div>
    )
  }
}

export default Wrap;