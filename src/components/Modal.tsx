
interface ModalProps {
  onClose: () => void,
  onSubmit: () => void,
  children: React.ReactNode,
  show: boolean
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  onSubmit,
  children,
  show,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    onSubmit();
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
              <button
                className="form_button"
                type="submit"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal
