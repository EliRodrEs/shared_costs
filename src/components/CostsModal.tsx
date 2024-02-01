import { useState } from "react";

export interface CostFormData {
  person: string;
  concept: string;
  date: Date;
  amount: number;
}

const emptyForm: CostFormData = {
  person: "",
  concept: "",
  date: new Date(),
  amount: 0,
};

const CostModal = ({
  onSubmit,
}: {
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

  const formatDate = (date: Date) => {
    return date.toISOString().substring(0, 10)
  }

  return (
    <>
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
          type="date"
          name="date"
          value={
            typeof costFormData.date === "string"
              ? costFormData.date
              : formatDate(costFormData.date)
          }
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
    </>
  );
};

export default CostModal;
