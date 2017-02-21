import React, { Component } from 'react';
import './App.css';

class BookmarkForm extends Component {

  onsubmit(e){
    e.preventDefault()

    let newBookmark = {
      created: Date.now(),
      name: this.refs.name.value,
      url: this.refs.url.value
    }
    this.props.addBookmark(newBookmark);
    this.refs.name.value = '';
    this.refs.url.value = '';

  }

  render (){
    return (
      <div className="container jumbotron">
        <h1>Save your favorite sites!</h1>
        <form onSubmit={this.onsubmit.bind(this)}>
          <div>
          <input type="text" ref="name" className="form__control" required placeholder="Write name here!"/>
          </div>
          <div>
          <input type="text" ref="url" className="form__control" required placeholder="Write URL here!"/>
          </div>
          <button type="submit" required className="btn__save">Save</button>
        </form>
      </div>
    )
  }
}


export default BookmarkForm;
