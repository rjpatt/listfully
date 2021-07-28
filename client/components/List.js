import React from 'react';

function List(props) {

  return (
    <div class="listDisplay">
      <h3>{props.title}</h3>
      <ul>
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
        <li>{props.items[3]}</li>
        <li>{props.items[4]}</li>
        <li>{props.items[5]}</li>
      </ul>
    </div>
  )

}

export default List;