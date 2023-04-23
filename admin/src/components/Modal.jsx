const Modal = ({ children, show = false, onClose }) => {
  return show ? (
    <>
      <div className="modal__fill" onClick={onClose}></div>
      <div className="modal__wrap">
        <div className="modal__head"></div>
        {children}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
