import React, { Component } from 'react';
import './App.css';

class BookmarkForm extends Component {

  createBookmark(e){
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
        <header>
          <h1>ReactBookmarker</h1>
        </header>
        <h2>Save your favorite sites</h2>
        <form onSubmit={this.createBookmark.bind(this)}>
          <div>
          <input type="text" ref="name" className="form__control" required placeholder="Name of the site" />
          </div>
          <div>
          <input type="text" ref="url" className="form__control" required placeholder="URL, including http://"/>
          </div>
          <button type="submit" required className="btn__save">Save</button>
        </form>
      </div>
    )
  }
}


export default BookmarkForm;
