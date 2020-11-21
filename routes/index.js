const express = require('express');
const cors = require('cors')
const router = express.Router();
const {
 getAllBooks, getBookById, addBook, deleteBook, search
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

//Search books

router.get("/search/:id", async function (req, res) {
  const userInput = req.params.id;
  const items = await search(userInput);
  res.json({ success: true, payload: items });
});


//Add new book
router.post("/add", async function (req, res) {
  let data = req.body;
  const book = await addBook(data);
  console.log(book)
  res.json(data.title + " has been added");
});

//delete book
router.delete("/delete/:id", async function(req, res){
  let data = req.params.id;
  console.log(data)
  const bookDeleted = await deleteBook(data);
  res.json(`Book with id ${data} has been deleted`)
  
})

// title,
// author,
// genre,
// read,
// series,
// leant

module.exports = router;
