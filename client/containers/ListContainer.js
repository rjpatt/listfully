import React, { useState, useEffect, Component } from 'react';
import List from '../components/List';
import "regenerator-runtime/runtime.js";
import { Redirect } from 'react-router-dom';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      fetchedLists: false,
      lists: []
    }
    this.deleteList = this.deleteList.bind(this)
    this.updateLists = this.updateLists.bind(this)
    this.editList = this.editList.bind(this)
  }
  _isMounted = false;



  deleteList = (id, e) => {
    const userInput = confirm("Do you really want to delete this list?");
    if (userInput) {
      fetch('/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
      })
        .then(response => response.json())
        .catch(err => console.log(err))
    }
  }

  updateLists = () => {
    fetch('/api/getLists')
      .then(res => res.json())
      .then(
        (lists) => {
          if (this._isMounted) {
            this.setState({
              lists,
              fetchedLists: true
            });
          }
        },
        (error) => {
          if (this._isMounted) {
            this.setState({
              fetchedLists: true,
              error
            });
          }
        }
      )
  }

  editList = (id, e) => {
    <Redirect to='/editlist' />
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateLists();
  }

  componentDidUpdate(prevState) {
    if (this.state.lists !== prevState.lists) {
      this.updateLists();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { error, fetchedLists, lists } = this.state;
    if (error) {
      return (
        <div className="error">
          Error: {error.message}
        </div>
      )
    } else if (!fetchedLists) {
      return <div className="loading">Loading...</div>;
    } else {
      if (!lists) return null;
      if (!lists.length) return (
        <div>Sorry, no lists found</div>
      )
      const renderLists = [];
      for (let i = 0; i < lists.length; i++) {

        renderLists.push(<List key={`list${i}`} info={lists[i]} delete={this.deleteList} />)

      }
      return (
        <div id="list-container">
          {renderLists}
        </div>
      );
    }
  }

}


export default ListContainer;