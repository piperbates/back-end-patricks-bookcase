const express = require('express');
const router = express.Router();
const {
 getAllBooks, getBookById, getBookByAuthor
} = require(`../db/models/index`);



//get all books
router.get("/", async function (req, res) {
  const books = await getAllBooks();
  res.json({ success: true, payload: books });
  console.log(books)
  // }
});

//get book by ID
router.get("/book/:id", async function (req, res) {
  const id = req.params.id;
  const book = await getBookById(id);
  res.json({ success: true, payload: book });
  console.log(book)
  // }
});


module.exports = router;
