import React from 'react';
import '../Styles/Modal.css'

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal-overlay" />
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;