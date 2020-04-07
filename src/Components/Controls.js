import React, {Component} from "react";

class Controls extends Component{
  render(){
    return(
      <div>
      <audio ref={(audio) => this.audio = audio} src={this.props.click} />
      <button type="button" onClick={() => {this.props.handlePlay(this.audio)}}>Play</button>
      <button type="button" onClick={() => {this.props.handlePause()}}>Stop</button>
      </div>
    )
  }
}

export default Controls;
