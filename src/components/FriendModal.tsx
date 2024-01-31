import { useState } from "react";

export interface FriendFormData {
  name: string,
}

const emptyForm: FriendFormData = {
  name: "",
};

const FriendModal = ({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (friendFormData: FriendFormData) => void;
}) => {
  const [friendFormData, setFormData] = useState(emptyForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...friendFormData, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(friendFormData);
  };

  return (
    <>
      <div className="modal_holder">
        <div className="modal">
          <div className="inputs_holder">
            <button className="btn_close" onClick={onClose}>
              <i className="fa fa-close"></i>
            </button>
            <form onSubmit={handleSubmit}>
              <label className="form_label">Nombre</label>
              <input
                className="form_input"
                type="text"
                name="name"
                value={friendFormData.name}
                onChange={handleChange}
              />
              <button className="form_button" type="submit">
                Guardar amigo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default FriendModal
