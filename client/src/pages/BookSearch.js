import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn/";
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

  function handleBookSave({id, title, author, description, link, image}) {
    console.log(id, title, author, description, link, image)

    API.saveBook({
      title: title,
      author: author,
      description: description,
      link: link,
      image: image
    })
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

                  <SaveBtn
                    onClick={() => handleBookSave({id: book.id, title: book.volumeInfo.title, author: book.volumeInfo.authors[0], description: book.volumeInfo.description, link: book.volumeInfo.previewLink, image: book.volumeInfo.imageLinks.thumbnail})}
                  />
                  
                  <Card
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.previewLink}
                   // image={book.volumeInfo.imageLinks.thumbnail}
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


export default BookSearch;
