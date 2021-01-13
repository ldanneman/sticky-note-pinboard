import React from "react";
import Item from "./Item";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div key={item.key}>
        <Item
          item={item}
          updateItem={props.updateItem}
          deleteItem={props.deleteItem}
        />
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
