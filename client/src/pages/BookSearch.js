import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBtn from "../components/SaveBtn/";
import Card from "../components/Card/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "../pages/pages.css";
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

function BookSearch() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("");

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
              <h1>React Google Book Search</h1>
              <br />
              <h3>Search for books and save them to a favorite list!</h3>
            </Jumbotron>
            </Col>
            <Col size="md-1"></Col>
        </Row>

        <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
            <form>
            <h2>Book Search</h2>
            <br />
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Search by book title or author"
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          <Col size="md-3"></Col>
        </Row>

        <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
                <h2>Results</h2>
                <br />
                {books ? (
                  <List>
                {books.map(book => (
                  <ListItem key={book.id}>

                  <SaveBtn
                    onClick={() => handleBookSave({id: book.id, title: book.volumeInfo.title, author: book.volumeInfo.authors[0], description: book.volumeInfo.description, link: book.volumeInfo.previewLink, image: book.volumeInfo.imageLinks.thumbnail},toast.notify("Book saved successfully!"))}
                  />
                  
                   <Card
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.previewLink}
                    image={book.volumeInfo.imageLinks ? (
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                    ):(
                      <p>No Image</p>
                    )}
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
