import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn/";
import Card from "../components/Card/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function SavedBook() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
      <Container fluid>
        <Row>
        
          <Col size="md-1"></Col>
          <Col size="md-10">
           <br />
           <u><h1 className="text-center">Your Saved Books</h1></u>
                <br />
                {books ? (
                  <List>
                {books.map(book => (
                  <ListItem key={book._id}>

                    <DeleteBtn 
                        onClick={() => deleteBook(book._id)} 
                    />

                    <Card
                         title={book.title}
                         author={book.author}
                         synopsis={book.synopsis}
                         link={book.link}
                       //  image={book.volumeInfo.imageLinks ? (
                       //   <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                       // ):(
                       //   <p>No Image</p>
                       // )}
                      />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
   
          </Col>

          <Col size="md-1"></Col>
        </Row>
      </Container>
    );
  }


export default SavedBook;
