import "./Button.css";

interface ButtonProps {
  icon?: string;
  text: string;
  buttonColor?: "green" | "red" | "gray" | "blue";
}

const Button = ({ icon, text, buttonColor }: ButtonProps) => {
  return (
    <button
      style={
        buttonColor
          ? { backgroundColor: buttonColor }
          : { backgroundColor: "gray" }
      }
      //if there is a prop name buttonColor, then the background color will be whatever is specified in the place where the prop comes from
      //if there isn't a prop definde, then the default color will be gray
      className="SharedButton"
    >
      {text}
      {icon && <img className="ButtonIcon" src={icon} alt="" />}
      {/* the above code means - if there is an icon, then add this icon and this classname. if there is no icon, then do not add any */}
    </button>
    //the button text and button icon will be changing in every use case, therefore we name them as we like and use them as props
  );
};

export default Button;
