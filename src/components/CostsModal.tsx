import { useState } from "react";
import { Friend } from "../friends";

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
  friends,
}: {
  onSubmit: (costFormData: CostFormData) => void;
  friends: Friend[]
}) => {
  const [costFormData, setFormData] = useState(emptyForm);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = name === "amount" ? parseFloat(value) : value;
    setFormData({ ...costFormData, [name]: newValue });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...costFormData, [name]: value });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(costFormData);

  };

  const formatDate = (date: Date) => {
    return date.toISOString().substring(0, 10);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form_label">Persona</label>
        <select
          className="form_input"
          name="person"
          value={costFormData.person}
          onChange={handleChangeSelect}
          required
        >
          <option value="" disabled>
            Elegir pagador
          </option>
          {friends.map((friend) => (
            <option key={friend.id} value={friend.name}>
              {friend.name}
            </option>
          ))}
        </select>
        <label className="form_label">Concepto</label>
        <input
          className="form_input"
          type="text"
          name="concept"
          value={costFormData.concept}
          onChange={handleChangeInput}
          required
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
          onChange={handleChangeInput}
          required
        />
        <label className="form_label">Total</label>
        <input
          className="form_input"
          type="number"
          name="amount"
          value={costFormData.amount}
          onChange={handleChangeInput}
          required
        />
        <button className="form_button" type="submit">
          Guardar coste
        </button>
      </form>
    </>
  );
};

export default CostModal;
