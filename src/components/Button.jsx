import './Button.css';

const Button = ({ id, text, action }) => {
  const handleAction = (e) => {
    if (action) {
      action(e);
    }
  };

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
};

export default Button;
