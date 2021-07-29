import React, { Component } from 'react';
import EditListItem from './EditListItem';
import { withRouter } from 'react-router-dom';

function EditList(props) {

  const { list, onChangeItems, onChangeTitle, onSubmit } = props;

  const { title, items } = list[0];

  const listItems = [];
  for (let i = 0; i < items.length; i++) {
    listItems.push(<EditListItem key={i} onChangeItems={onChangeItems} liInfo={items[i]} />);
  }

  console.log(listItems)
  return (

    <form id="edit-list" onSubmit={onSubmit}>
      <label htmlFor="listName">Name your list: </label>
      <input type="text" id="listName" defaultValue={title} />
      {listItems}
      <input type="submit" value="Submit" />
    </form>

  );

}







export default withRouter(EditList);