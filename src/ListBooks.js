import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onAddBookChoice: PropTypes.func.isRequired,
    heading: PropTypes.string
  }

  render() {
    const { books, heading } = this.props

  if (books.length > 0){
    return (
      <div className='bookshelf-books'>
      <h2 className="bookshelf-title">{heading}</h2>
        <ol className='books-grid'>            
          {books.map((book) => (
            <li key={book.id} className='book-list-item'>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"  style={{ width: 128, height:192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                    <div className='book-shelf-changer'>
                      <select value={book.shelf} onChange={(event) => this.props.onAddBookChoice(book, event.target.value)}  >
                        <option value="none" disabled>Move to...</option>
                        <option value={"currentlyReading"}>Currently Reading</option>
                        <option value={"wantToRead"}>Want to Read</option>
                        <option value={"read"}>Read</option>
                        <option value={"none"}>None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
            </li>
          ))}
        </ol>
      </div>
    )}
  else {
    return (null)
  }}
}

export default ListBooks
