import React from 'react';

function ListItem({ liInfo }) {
  const { index, title } = liInfo;
  return (
    <p>
      {index + 1}: {title}
    </p>
  )

}

export default ListItem;