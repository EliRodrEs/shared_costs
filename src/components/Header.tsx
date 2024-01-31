import './Header.css'
import Button from './UI/Button'

const icon_add_friend = "fa-solid fa-face-smile-beam";
const icon_add_cost = "fa-solid fa-face-frown";


const Header = ({ title }:{title:string}) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <div className="btn_holder">
          <Button text="Añadir pago" icon={icon_add_cost} />
          <Button text="Añadir amigo" icon={icon_add_friend} />
        </div>
      </header>
    </>
  );
 }

export default Header
