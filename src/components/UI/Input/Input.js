import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.id}
        id={props.id}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.validateHandler}
      />
    </div>
  );
};

export default Input;
