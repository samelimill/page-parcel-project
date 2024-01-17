// Import CSS file for Button component
import "./Button.css";

// Import Link component from react-router-dom
import { Link } from "react-router-dom";

// Available styles for the button
const STYLES = ["btn--primary", "btn--outline", "btn--test"];

// Available sizes for the button
const SIZES = ["btn--medium", "btn--large"];

// Button component
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // Check if the provided buttonStyle is valid, otherwise use the default style
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Check if the provided buttonSize is valid, otherwise use the default size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Render the button component
  return (
    // Use Link component to navigate to "/signup" when the button is clicked
    <Link to="/signup" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
