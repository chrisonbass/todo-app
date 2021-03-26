import parseJSX from "../parseJSX";

const EmptyListItem = ({children}) => (
  <li className="empty-list">
    <span>{children && children.length ? children : "Nothing to do"}</span>
  </li>
);

export default EmptyListItem;
