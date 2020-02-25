import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn/";
import Card from "../components/Card/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function BookSearch() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  //axios call here? https://www.googleapis.com/books/v1/volumes?q=search+terms
  //https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  // MY KEY: AIzaSyDL1_1UfWL73qKRX4O9wk5iyCLI4lYJnZg

    return (
      <Container fluid>
        <Row>
            <Col size="md-1"></Col>
          <Col size="md-10">
            <Jumbotron>
              <u><h1>React Google Book Search</h1></u>
              <br />
              <h3>Search for and save books!</h3>
            </Jumbotron>
            </Col>
            <Col size="md-1"></Col>
        </Row>

        <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
            <form>
            <h3>Book Search</h3>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-1"></Col>
        </Row>

        <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
            <Jumbotron>
                <h1>Results</h1>
                
                {books.length ? (
                  <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                    <Card title={book.title} img={book.img} author={book.author} descripion={book.description} link={book.link} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
            </Jumbotron>
            </Col>
        <Col size="md-1"></Col>
        </Row>
      </Container>
    );
  }


export default BookSearch;
