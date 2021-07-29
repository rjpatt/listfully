import React, { useState } from 'react';
import AddListItem from './AddListItem';

const AddList = ({ saveList, inputList, addNewListItem, currIndex }) => {



  return (
    <form id="new-list">

      <label htmlFor="listName">Name your list: </label>
      <input type="text" id="listName"></input>

      {inputList}
      <div id="form-buttons">
        <button id="addlistitem" onClick={addNewListItem}>Add Item+</button>
        <button id="submit" onClick={saveList}>Save List</button>
      </div>
    </form>
  );
};

export default AddList;