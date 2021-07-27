import React, { useState, useEffect } from 'react';

function ListContainer() {

  const [fetchedLists, updateFetchedLists] = useState(false);
  const [lists, updateLists] = useState([]);

  useEffect(() => {
    fetch('/lists')
      .then(res => res.json())
      .then((lists) => {
        if (!Array.isArray(lists)) lists = [];
        updateFetchedLists(true);
        updateLists(lists);
      })
  })

  return (
    <div id="list-container"></div>
  )
}

export default ListContainer;