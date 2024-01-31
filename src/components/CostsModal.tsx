import { useState } from "react";

export interface CostFormData {
  person: string;
  concept: string;
  date: string;
  amount: number;
}

const emptyForm: CostFormData = {
  person: "",
  concept: "",
  date: "",
  amount: 0,
};

const CostModal = ({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (costFormData: CostFormData) => void;
}) => {
  const [costFormData, setFormData] = useState(emptyForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...costFormData, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(costFormData);
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
                value={costFormData.person}
                onChange={handleChange}
              />
              <label className="form_label">Concepto</label>
              <input
                className="form_input"
                type="text"
                name="concept"
                value={costFormData.concept}
                onChange={handleChange}
              />
              <label className="form_label">Fecha</label>
              <input
                className="form_input"
                type="text"
                name="date"
                value={costFormData.date}
                onChange={handleChange}
              />
              <label className="form_label">Total</label>
              <input
                className="form_input"
                type="number"
                name="amount"
                value={costFormData.amount}
                onChange={handleChange}
              />
              <button className="form_button" type="submit">
                Guardar coste
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CostModal;
