import React, { Fragment } from "react";

const Modal = (props) => {
  return (
    <Fragment>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="modal">
        <p>정말 삭제하시겠습니까?</p>
        <div>
          <button className="btn" onClick={props.onClose}>
            취소
          </button>
          <button className="btn" onClick={props.onClick}>확인</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
