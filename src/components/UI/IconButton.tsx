import './IconButton.css'
const IconButton = ({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: string;
  onClick: () => void
}) => {
  return (
    <>
      <button onClick={onClick}>
        <i className={icon}></i>
        {text}
      </button>
    </>
  );
};

export default IconButton
