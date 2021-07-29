import React, { Component } from 'react';
import EditList from '../components/EditList';
import { withRouter } from 'react-router-dom';

class EditListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      items: [],
      list: [],
      fetchedData: false,

    }
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
              list,
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


  onSubmit(e) {
    e.preventDefault();

    const newTitle = document.getElementById('listName').value;
    const itemInputs = document.querySelectorAll('input');
    const newItems = [];
    for (let i = 1; i < itemInputs.length; i++) {
      newItems.push(itemInputs[i].value)
    }


    const send = {
      id: this.props.match.params.id,
      title: newTitle,
      items: newItems
    };
    fetch('/api/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(send)
    })
    this.props.history.push('/lists');
  }

  render() {
    const { fetchedData, list } = this.state;

    if (!list.length) {
      return <div className="loading">Loading...</div>;
    } else {

      return (
        <div id="listeditor">
          <h3>Edit your list</h3>
          <EditList list={list} onSubmit={this.onSubmit} />
        </div>
      );
    }
  }
}






export default withRouter(EditListContainer);