import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
};

function ModalFunc(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const closeModal = (e) => {
    e.stopPropagation();
    props.setModalIsOpen(false);
  };

  const updateSave = (e) => {
    props.updateItem(props.item.key, title, text);
    closeModal(e);
  };
  return (
    <>
      <Modal
        isOpen={props.isShowing}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <input
          placeholder="Update Title"
          defaultValue={props.item.title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <textarea
          placeholder="Update Note"
          defaultValue={props.item.text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div>
          <button onClick={closeModal}>Exit</button>
          <button onClick={updateSave}>Save</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalFunc;
