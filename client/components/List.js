import React from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

function List(props) {
  const { title, items, _id } = props.info;

  const listItems = [];
  for (let i = 0; i < items.length; i++) {
    listItems.push(<ListItem key={`listitem${i}`} liInfo={items[i]} />)
  };


  return (
    <div className="listDisplay">
      <h3>{title}</h3>
      <ul>
        {listItems}
      </ul>
      <div className="listButtons">
        <button className="delete" onClick={(e) => props.delete({ id: _id }, e)}>Delete</button>
        <Link to={`/editlist/${_id}`}><button className="edit">Edit</button></Link>
      </div>
    </div>
  )

}

export default List;