import React from 'react';

const AddListItem = ({ index }) => {

  return (
    <>
      <label htmlFor={`item${index + 1}`}>{`Item ${index + 1}:`} </label>
      <input type="text" id={`item${index + 1}`}></input>
    </>

  )


}

export default AddListItem;