import React from 'react'
import BookList from './BookList';
import Classes from "../styles/Books.module.css"


function Books() {
  return (
    <div className={Classes.main}>
        <h3 className={Classes.header}>Books</h3>
        <BookList title="Jadughor Pata Ache Ei Ekhane"/>
    </div>
  );
}

export default Books