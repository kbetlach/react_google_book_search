# React Google Book Search

Deployed link: (https://react-google-book-search-kb.herokuapp.com/)

<img width="1356" alt="Screen Shot 2020-03-23 at 11 15 11 AM" src="https://user-images.githubusercontent.com/53587397/77337934-9f169280-6cf7-11ea-91ba-461d8f277ae9.png">

## Introduction

This is a full stack MERN app that utilizes a Mongo database, a React.js front end, Express routing, and a Node.js server.

It has two page components, a book search and a saved books page. The user lands on the book search page, where they can search any book by title or author, and utilizing the Google Books API, a search result populates the page. The user can then see the book, author, description, a thumbnail image, and a link to the book's entry on the Google Books API where more information is displayed. If the user likes any particular book, they can click the save button to save the book as an entry in the Mongo database.

The user can then click the saved books button to be directed to a separate page. This page simply displays all books saved by the user. The save button from before is replaced by a delete button, and clicking this will remove the entry from the page as well as the Mongo database.

Give it a try!

## Technologies

- React.js
- MongoDB
- ExpressJS
- Node.js
- mLab / Heroku for deployment
- HTML5 / CSS / JavaScript
- Bootstrap

## Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it!

## Sources and Inspiration

I found this app to be fantastic practice putting the MERN stack to use, using the MVC folder paradigm. 

I think my favorite part to figure out was how to get the information from the API onto the page for display. I decided to put it all into a list element, with Bootstrap cards on top of each other for each book entry. This is what it looks like in my BookSearch.js page component:

![code](https://user-images.githubusercontent.com/53587397/75921623-0c38b580-5e27-11ea-86a2-d6f72254bd28.png)

This was especially good practice for using a React frontend, and how to make that mesh with an API.
