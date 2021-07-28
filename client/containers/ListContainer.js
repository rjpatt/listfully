import React, { useState, useEffect, Component } from 'react';
import List from '../components/List';
import "regenerator-runtime/runtime.js";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedLists: false,
      lists: []
    }
  }

  componentDidMount() {
    fetch('/api/getLists')
      .then(res => res.json())
      .then((data) => {
        if (!Array.isArray(data)) data = [];
        return this.setState({
          lists: data,
          fetchedLists: true
        });
      })
      .catch(err => console.log('ListContainer getLists: ERROR: ', err));
  }

  render() {
    if (!this.state.fetchedLists) {
      return (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      )
    } else {

      const { lists } = this.state;
      if (!lists) return null;
      if (!lists.length) return (
        <div>Sorry, no lists found</div>
      )
      const renderLists = [];
      for (let i = 0; i < lists.length; i++) {
        renderLists.push(<List key={lists[i][_id]} title={lists[i][title]} items={lists[i][items]} />)
      };

      return (
        <div id="list-container">
          {renderLists}
        </div>
      );
    }
  }

}

// function ListContainer() {

//   const [fetchedLists, updateFetchedLists] = useState(false);
//   const [lists, updateLists] = useState([]);
//   const renderLists = [];

//   const fetchLists = (lists) => {
//     fetch('/api/getLists')
//       .then((res) => res.json())
//       .then(fLists => updateLists(fLists))
//       .catch(err => console.log('error fetching lists: ', err))
//   }

//   useEffect((lists) => {
//     const grabLists = async (lists) => {
//       try {
//         await fetchLists();
//         console.log('lists after fetch: ', lists)
//         for (let i = 0; i < lists.length; i++) {
//           renderLists.push(<List key={lists[i][_id]} title={lists[i][title]} items={lists[i][items]} />)
//         };
//         updateFetchedLists(true);
//       } catch (err) {
//         console.log('error grabbing lists: ', err);
//       }
//     }
//     grabLists();
//   }, [])


//   if (!fetchedLists) {
//     return (
//       <div>
//         <h4>Loading data, please wait...</h4>
//       </div>
//     )
//   } else {
//     console.log('render lists: ', renderLists)
//     return (
//       <div id="list-container">
//         {renderLists}
//       </div>
//     )
//   }
// }

export default ListContainer;