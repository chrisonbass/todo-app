import parseJSX from "../parseJSX";
import Button from "./Button";

const ListItem = ({text, onDelete}) => {
  return (
    <li>
      <span>{text}</span>
      <Button type="button" className="delete-button" onClick={onDelete}>
        <span className="icon trash"></span> Delete
      </Button>
    </li>
  )
};

export default ListItem;
