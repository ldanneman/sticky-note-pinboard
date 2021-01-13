import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalFunc from "./Modal";

const Item = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setModalIsOpen(false);
  };

  return (
    <div className="list note sticky1" onClick={() => setModalIsOpen(true)}>
      <div className="pin"></div>

      <div className="text">
        <span className="title">{props.item.title}</span>
        <br />
        {props.item.text}
      </div>

      <ModalFunc
        item={props.item}
        updateItem={props.updateItem}
        isShowing={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        closeModal={closeModal}
      />

      <div className="ike">
        <FontAwesomeIcon
          className="faicons"
          onClick={(e) => {
            props.deleteItem(e, props.item.key);
          }}
          icon="trash"
        />
      </div>
    </div>
  );
};

export default Item;
