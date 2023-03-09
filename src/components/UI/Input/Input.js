import React, { useContext } from 'react';

import AuthContext from '../../../store/auth-context';

import classes from './Input.module.css';

const Input = (props) => {
  const context = useContext(AuthContext);
  console.log(context);
  // access everything I need in the context object and conditionally set each attribute on the input element based on a password or email prop

  return (
    <>
      {' '}
      <div
        className={`${props.classes} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type={props.label}
          id={props.label}
          value={props.value}
          onChange={props.changeHandler}
          onBlur={props.validateHandler}
        />
      </div>
      <div
        className={`${props.classes} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type={props.label}
          id={props.label}
          value={props.value}
          onChange={props.changeHandler}
          onBlur={props.validateHandler}
        />
      </div>
    </>
  );
};

export default Input;
