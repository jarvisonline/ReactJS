import colorNames from "colornames";
const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSumbit={(e) => e.preventDefault()}>
      <label>Enter a color:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
