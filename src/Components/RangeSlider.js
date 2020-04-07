import React from "react";

const RangeSlider = (props) => {

  function handleChange(event){
    props.onBpmSelected(event.target.value)
  }

    return(
      <div>
      <input type="range" id="bpm" name="bpm"
      min="1" max="100" onChange={handleChange}/>
      </div>
    )
}

export default RangeSlider;
