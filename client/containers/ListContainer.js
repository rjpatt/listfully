import React, { useState, useEffect } from 'react';
import List from '../components/List';

function ListContainer() {

  const [fetchedLists, updateFetchedLists] = useState(false);
  const [lists, updateLists] = useState([]);

  useEffect((didMount) => {
    fetch('/api/getLists')
      .then(res => res.json())
      .then((lists) => {
        console.log(lists)
        if (!Array.isArray(lists)) lists = [];
        updateFetchedLists(true);
        updateLists(lists);
      })
      .catch(err => console.log(err));
  }, [])


  if (!fetchedLists) {
    return (
      <div>
        <h4>Loading data, please wait...</h4>
      </div>
    )
  } else {
    const renderLists = [];
    lists.forEach((list) => {
      renderLists.push(<List key={list[_id]} title={list[title]} items={list[items]} />)
    })
    return (
      <div id="list-container">
        {renderLists}
      </div>
    )
  }
}

export default ListContainer;