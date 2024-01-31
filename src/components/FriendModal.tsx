import { useState } from "react";

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
      <div className="modal">
        <div className="inputs_holder">
          <span className="btn_close" onClick={onClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <label>
              Persona
              <input
                type="text"
                name="person"
                value={formData.person}
                onChange={handleChange}
              />
            </label>
            <label>
              Concepto
              <input
                type="text"
                name="concept"
                value={formData.concept}
                onChange={handleChange}
              />
            </label>
            <label>
              Fecha
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
            <label>
              Total
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Guardar amigo</button>
          </form>
        </div>
      </div>
    </>
  );
};


export default FriendModal
