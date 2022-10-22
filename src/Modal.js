
const Modal = (props) => {
  return (
      <div className="modal">
        <p>정말 삭제하시겠습니까?</p>
        <div>
          <button className="btn" onClick={props.onClose}>
            취소
          </button>
          <button className="btn" onClick={props.onClick}>확인</button>
        </div>
      </div>
  );
};

export default Modal;
