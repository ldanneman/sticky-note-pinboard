import React from "react";

const InputForm = (props) => {
  return (
    <>
      <form id="to-do-form" className="Form" onSubmit={props.addItem}>
        <div className="FormArea">
          <input
            className="FormInput"
            type="text"
            placeholder="Enter Text"
            value={props.currentItem.title}
            onChange={props.handleTitle}
          />
          <textarea
            className="FormTextarea"
            type="text"
            placeholder="Enter Text"
            value={props.currentItem.text}
            onChange={props.handleInput}
          ></textarea>
          <button className="FormButton" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;



