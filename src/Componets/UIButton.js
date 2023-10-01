import classes from "../Style/Components/UIButton.module.scss";
const UIButton = ({ type, children }) => {
  return (
    <div
      className={
        type == "string"
          ? classes["UIButton"] + " " + classes["string"]
          : classes["UIButton"] + " " + classes["active"]
      }
    >
      {children}
    </div>
  );
};
export default UIButton;
