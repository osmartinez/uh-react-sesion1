import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
// () =>
const Input = ({mensaje1,handleCambiarMensaje}) => {

  return(
  <div className={styles.Input}>
    <input onChange={(e)=>{  handleCambiarMensaje(e.target.value)}} defaultValue={mensaje1}/>
  </div>)
};

Input.propTypes = {
  mensaje1: PropTypes.string,
  handleCambiarMensaje: PropTypes.func
};

Input.defaultProps = {
  mensaje1: "",
};

export default Input;
