import React, {Component} from 'react';

class Button extends Component {

  render(){
    return(
      <button id={this.props.ident} onClick={this.props.onPress} className={this.props.classNames}>{this.props.value}</button>
    )
  }
}

export default Button;