import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkForm from './App';
import './index.css';


class BookmarkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {"created": 1449445818815, "name": "Facebook", "url":  "http://www.facebook.com" },
        {"created": 1449445818845, "name": "Reddit", "url": "http://www.reddit.com" }
      ]};
  }

  addBookmark (newBookmark) {
    let newData = this.state.data.concat(newBookmark);
    this.setState({data:newData});
  }

  render (){
    let data = this.state.data;
    let bookmarkList = data.map((bookmark, index) => {
      return <li key={index}> <a href={bookmark.url}>{bookmark.name}</a></li>
    });
    return (
      <div>
      <div className="bookmark__form">
        <BookmarkForm addBookmark={this.addBookmark.bind(this)} />
      </div>
      <div className="bookmark__list">
        <ul>{bookmarkList}</ul>
      </div>
      </div>
    )
  }
}

/*class App extends React.Component {
  render (){
    return (
      <div>
        <BookmarkList />
      </div>
    )
  }
}*/

ReactDOM.render(
  <BookmarkList />,
  document.getElementById('root')
);
