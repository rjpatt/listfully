import React, { Component } from 'react';
import EditListItem from './EditListItem';
import { withRouter } from 'react-router-dom';

class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      items: [],
      fetchedData: false
    }
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  _isMounted = false;

  getList = () => {
    fetch(`/api/getLists/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(list => {
        if (this._isMounted) {
          this.setState(
            {
              title: list.title,
              items: list.items,
              fetchedData: true
            }
          )
        }
      }, (err) => console.log(err))
  }
  componentDidMount() {
    this._isMounted = true;
    this.getList();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeItems(e) {
    const itemInputs = document.querySelectorAll('input');
    const items = [];
    for (let i = 1; i < itemInputs.length; i++) {
      items.push(itemInputs[i].value)
    }
    this.setState({
      items
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const send = {
      id: this.props.match.params.id,
      title: this.state.title,
      items: this.state.items
    };
    fetch('/api/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(send)
    })
    this.props.history.push('/lists');
  }

  render() {
    const { fetchedData, title, items } = this.state;
    if (!fetchedData) {
      return <div className="loading">Loading...</div>;
    } else {
      const listItems = [];
      for (let i = 0; i < items.length; i++) {
        listItems.push(<EditListItem liInfo={items[i]} onChangeItems={this.onChangeItems} />)
      }
      return (
        <div id="listeditor">
          <h3>Edit your list</h3>
          <form id="edit-list">
            <label htmlFor="listName">Name your list: </label>
            <input type="text" id="listName" value={this.state.title} onChange={this.onChangeTitle}></input>
            {listItems}
            <input type="submit">Save List</input>
          </form>
        </div>
      );
    }
  }
}






export default withRouter(EditList);