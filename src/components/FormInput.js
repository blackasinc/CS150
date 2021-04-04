import React from 'react';
import '../resources/FormInput.css';

function FormInput(props) {
  return (
    <div className="form-input-container">
      <label>{props.title}:</label>
      <input type={props.inputType}
        value={props.defaultValue}
        onChange={event => props.onChange(event)} />
    </div>
  )
}

export default FormInput;
