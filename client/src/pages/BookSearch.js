import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function BookSearch() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("");

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
    const { value } = event.target;
    setBookSearch(value)
  };
  
  const handleFormSubmit = event => {
    event.preventDefault();
    API.getApiBook(bookSearch)
      .then(res => {
        console.log(res)
         setBooks(res.data.items)})
      .catch(err => console.log(err));
  };

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
                <u><h1>Results</h1></u>
                <br />
                {books.length ? (
                  <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                
                    <Card title={book.volumeInfo.title} 
                    //save and view buttons go here-ish
                    //img={book.volumeInfo.imageLinks.smallThumbnail} 
                    author={book.volumeInfo.authors} 
                    description={book.volumeInfo.description} 
                    link={book.volumeInfo.link} />

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


export default BookSearch;
