import { useState } from "react";

export interface FriendFormData {
  name: string,
}

const emptyForm: FriendFormData = {
  name: "",
};

const FriendModal = ({
  onSubmit
}: {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name_input" className="form_label">
          Nombre
        </label>
        <input
          id="name_input"
          className="form_input"
          type="text"
          name="name"
          value={friendFormData.name}
          onChange={handleChange}
          required
        />
        <button className="form_button" type="submit">
          Añadir amigo
        </button>
      </form>
    </>
  );
};


export default FriendModal
