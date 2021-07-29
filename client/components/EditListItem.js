import React from 'react';

const EditListItem = ({ liInfo, onChangeItems }) => {
  const { index, title } = liInfo;

  return (
    <>
      <label htmlFor={`item${index + 1}`}>{`Item ${index + 1}:`} </label>
      <input type="text" id={`item${index + 1}`} defaultValue={title} />
    </>

  )


}

export default EditListItem;