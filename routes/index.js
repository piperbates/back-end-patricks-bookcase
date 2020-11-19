const express = require('express');
const cors = require('cors')
const router = express.Router();
const {
 getAllBooks, getBookById, addBook
} = require(`../db/models/index`);

router.use(cors());


//get all books
router.get("/", async function (req, res) {
  const books = await getAllBooks();
  res.json({ success: true, payload: books });
  // }
});

//get book by ID
router.get("/book/:id", async function (req, res) {
  const id = req.params.id;
  const book = await getBookById(id);
  res.json({ success: true, payload: book });
  // }
});




//Add new book
router.post("/add", async function (req, res) {
  let data = req.body;
  const book = await addBook(data);
  // res.json(`${book.title} has been added to the database`);
});

// title,
// author,
// genre,
// read,
// series,
// leant

module.exports = router;
