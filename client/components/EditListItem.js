import React from 'react';

const EditListItem = ({ liInfo }) => {
  const { index, title } = liInfo;

  return (
    <>
      <label htmlFor={`item${index + 1}`}>{`Item ${index + 1}:`} </label>
      <input type="text" id={`item${index + 1}`} default={title}></input>
    </>

  )


}

export default EditListItem;