import React, { useState } from 'react';
import AddListItem from './AddListItem';
import AddList from './AddList';
import { withRouter } from 'react-router-dom';

const ListCreator = (props) => {

  const [currIndex, setCurrIndex] = useState(0);
  const [inputList, setInputList] = useState([]);

  const saveList = (e) => {
    e.preventDefault();
    const listName = document.getElementById('listName').value;
    console.log(listName)
    const itemInputs = document.querySelectorAll('input');
    const items = [];
    for (let i = 1; i < itemInputs.length; i++) {
      items.push(itemInputs[i].value);
    }
    console.log(items)
    itemInputs.forEach((input) => {
      input.value = '';
    })

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
    setInputList([]);
    setCurrIndex(0);
    props.history.push('/lists');
  };

  const addNewListItem = (e) => {
    e.preventDefault();
    setInputList(inputList.concat(<AddListItem key={currIndex} index={currIndex} />))
    setCurrIndex(currIndex + 1);
  }

  return (
    <div id="listcreator">
      <h3>Create a new list!</h3>
      <AddList currIndex={currIndex} inputList={inputList} addNewListItem={addNewListItem} saveList={saveList} />
    </div>
  );
};

export default withRouter(ListCreator);