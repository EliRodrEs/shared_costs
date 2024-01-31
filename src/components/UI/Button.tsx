import './Button.css'
const Button = ({text, icon}: {text: string, icon:string}) => {
    return (
      <>
        <button>
          <i className={icon}></i>
          {text}
        </button>
      </>
    );
 }

export default Button
