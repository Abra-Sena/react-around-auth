import React from 'react';
import authSuccess from '../images/auth-success.svg';
import authFailure from '../images/auth-failure.svg';

function InfoTooltip(props) {
  return (
    <div className={`popup popup_type_auth-result ${props.isOpen ? "popup_open" : ""}`} onClick={props.onClose}>
      <div className="popup__content">
        <button type="button" aria-label="close-auth-result" className="popup__close form__close-button" onClick={props.onClose}></button>
        <img
          className="popup__image_auth-result"
          src={props.isSuccess ? authSuccess : authFailure}
          alt={props.isSuccess ? "success-icon" : "failure-icon"}
        />
        <h2 className="form__title">
          {props.isSuccess ? "Success! You have now been registered." : "Oops, something went wrong! Please try again."}
        </h2>
      </div>
    </div>
  )
}

export default InfoTooltip;
