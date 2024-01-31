import './Header.css'
import Button from './UI/Button'

const iconAddFriend = "fa-solid fa-face-smile-beam";
const iconAddCost = "fa-solid fa-face-frown";




const Header = ({
  title,
  openFriendModal,
  openCostModal,
}: {
  title: string;
  openFriendModal: () => void;
  openCostModal: () => void
}) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <div className="btn_holder">
          <Button
            text="Añadir pago"
            icon={iconAddCost}
            onClick={() => {
              openCostModal();
            }}
          />
          <Button
            text="Añadir amigo"
            icon={iconAddFriend}
            onClick={() => {
              openFriendModal();
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header
