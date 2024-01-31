import { useState } from "react";
import './FriendModal.css'

export interface FormData {
  person: string,
  concept: string,
  date: string,
  amount: number
}

const emptyForm: FormData = {
  person: "",
  concept: "",
  date: "",
  amount: 0,
};

const FriendModal = ({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}) => {
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
              <label className="form_label">Persona</label>
              <input
                className="form_input"
                type="text"
                name="person"
                value={formData.person}
                onChange={handleChange}
              />
              <label className="form_label">Concepto</label>
              <input
                className="form_input"
                type="text"
                name="concept"
                value={formData.concept}
                onChange={handleChange}
              />
              <label className="form_label">Fecha</label>
              <input
                className="form_input"
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <label className="form_label">Total</label>
              <input
                className="form_input"
                type="number"
                name="amount"
                value={formData.amount}
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
