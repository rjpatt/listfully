import React, { Component } from 'react';
import List from '../components/List';
import { withRouter } from 'react-router-dom';

class ListPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      fetchedList: false,
      list: []
    }
    this.deleteList = this.deleteList.bind(this)
    this.updateLists = this.updateLists.bind(this)
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
    fetch(`/api/getLists/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (list) => {
          if (this._isMounted) {
            this.setState({
              list,
              fetchedList: true
            });
          }
        },
        (error) => {
          if (this._isMounted) {
            this.setState({
              fetchedList: true,
              error
            });
          }
        }
      )
  }


  componentDidMount() {
    this._isMounted = true;
    this.updateLists();
  }

  componentDidUpdate(prevState) {
    if (this.state.list !== prevState.list) {
      this.updateLists();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { error, fetchedList, list } = this.state;
    if (error) {
      return (
        <div className="error">
          Error: {error.message}
        </div>
      )
    } else if (!fetchedList) {
      return <div className="loading">Loading...</div>;
    } else {
      if (!list) return null;
      if (!list.length) return (
        <div>Sorry, no list found</div>
      )
      const renderLists = [];
      for (let i = 0; i < list.length; i++) {

        renderLists.push(<List key={`list${i}`} info={list[i]} delete={this.deleteList} />)

      }
      return (
        <div id="list-page">
          {renderLists}
        </div>
      );
    }
  }
}

export default withRouter(ListPage);