import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkForm from './App';
import './App.css';

class BookmarkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []};
  }

  getInitialState() {
    var selectedOption = JSON.parse(localStorage.getItem( "data" ));
    return {
        selectedOption: selectedOption
    };
  }


  addBookmark (newBookmark) {
    let newData = this.state.data.concat(newBookmark);
    this.setState({data:newData});
  }
  //Adds state to LocalStorage
  componentDidUpdate (prevProps, prevState) {
    localStorage.state = JSON.stringify(this.state);
  }

  deleteBookmark (e) {
    var array = this.state.data;
    var index = array.indexOf(e.target.value)
    array.splice(index, 1);
    this.setState({data:array});

  }

  render (){
    let data = this.state.data;
    let bookmarkList = data.map((bookmark, index) => {
      return <li key={index} className="link__active-fade">
                <a href={bookmark.url} target="_blank">{bookmark.name}</a>
                <span className="delete" onClick={this.deleteBookmark.bind(this)}>✖</span>
              </li>
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

ReactDOM.render(
  <BookmarkList />,
  document.getElementById('root')
);
