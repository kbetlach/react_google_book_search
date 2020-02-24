const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  img: { data: Buffer, contentType: String },
  link: {
    work: mongoose.SchemaTypes.Url,
    profile: mongoose.SchemaTypes.Url
}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
