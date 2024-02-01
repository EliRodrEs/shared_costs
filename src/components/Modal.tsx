
interface ModalProps {
  onClose: () => void,
  onSubmit: () => void,
  children: React.ReactNode,
  show: boolean
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  show,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {show && (
        <div className="modal_holder">
          <div className="modal">
            <div className="inputs_holder">
              <button className="btn_close" onClick={handleClose}>
                <i className="fa fa-close"></i>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal
