import React from 'react';

const ListCreator = (props) => {

  const saveList = (e) => {
    e.preventDefault();
    const listName = document.getElementById('listName').value;
    const items = [document.getElementById('item1').value,
    document.getElementById('item2').value,
    document.getElementById('item3').value,
    document.getElementById('item4').value,
    document.getElementById('item5').value,
    document.getElementById('item6').value,
    ];

    document.getElementById('listName').value = '';
    document.getElementById('item1').value = '';
    document.getElementById('item2').value = '';
    document.getElementById('item3').value = '';
    document.getElementById('item4').value = '';
    document.getElementById('item5').value = '';
    document.getElementById('item6').value = '';

    const body = {
      listName,
      items
    };
    fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log('addList fetch ERROR: ', err));

  };

  return (
    <div id="listcreator">
      <h3>Create a new list!</h3>
      <form id="new-list">
        <label htmlFor="listName">Name your list: </label>
        <input type="text" id="listName"></input>
        <label htmlFor="item1">Item 1: </label>
        <input type="text" id="item1"></input>
        <label htmlFor="item2">Item 2: </label>
        <input type="text" id="item2"></input>
        <label htmlFor="item3">Item 3: </label>
        <input type="text" id="item3"></input>
        <label htmlFor="item4">Item 4: </label>
        <input type="text" id="item4"></input>
        <label htmlFor="item5">Item 5: </label>
        <input type="text" id="item5"></input>
        <label htmlFor="item6">Item 6: </label>
        <input type="text" id="item6"></input>
        <button id="submit" onClick={saveList}>Save List</button>
      </form>
    </div>
  );
};

export default ListCreator;