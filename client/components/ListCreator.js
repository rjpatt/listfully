import React from 'react';

const ListCreator = (props) => {
  return (
    <div id="listcreator">
      <h3>Create a new list!</h3>
      <form id="new-list">
        <label for="list-name">Name your list: </label>
        <input type="text" id="list-name"></input>
        <label for="item1">Item 1: </label>
        <input type="text" id="item1"></input>
        <label for="item2">Item 2: </label>
        <input type="text" id="item2"></input>
        <label for="item3">Item 3: </label>
        <input type="text" id="item3"></input>
        <label for="item4">Item 4: </label>
        <input type="text" id="item4"></input>
        <label for="item5">Item 5: </label>
        <input type="text" id="item5"></input>
        <label for="item6">Item 6: </label>
        <input type="text" id="item6"></input>
        <button id="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListCreator;