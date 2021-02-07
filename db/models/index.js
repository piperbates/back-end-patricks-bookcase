const { query } = require("../index");

//GET REQUESTS

//get all books
async function getAllBooks() {
  const res = await query(`
  SELECT * FROM library
    `);
  return res.rows;
}

//get book by id
async function getBookById(id) {
  const res = await query(`
    SELECT * FROM library
    WHERE ID = ${id}
      `);
  return res.rows;
}

//get book by author (currently doesn't function)
async function getBookByAuthor(author) {
  const res = await query(`
    SELECT * FROM library
    WHERE AUTHOR = ${author}
      `);
  return res.rows;
}

//POST REQUESTS

async function addBook(book) {
  const res = await query(
    `
      INSERT INTO library (
        title,
        author,
        genre,
        read,
        series,
        leant
        )
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
    [book.title, book.author, book.genre, book.read, book.series, book.leant]
  );
  return res;
}

//DELETE req

async function deleteBook(id) {
  console.log("The id is: " + id);
  const res = await query(`DELETE FROM library WHERE ID = ${id};`);
  return res;
}

//PATCH / Update req 

/* Currently can only change from unread to read and viceversa. Working on being able to update the whole thing. */

async function updateBook(id, book) {
  const response = await query(
    `UPDATE library SET title = COALESCE($1, title), author = COALESCE($2, author), genre = COALESCE($3, genre), series = COALESCE($4, series), read = COALESCE($5, read), leant = COALESCE($6, leant) WHERE id = ${id}`, [book.title, book.author, book.genre, book.series, book.read, book.leant]
  )
};



//SEARCH BY TITLE / AUTHOR / GENRE / SERIES
async function search(userInput) {
  const res = await query(
    `SELECT * FROM library WHERE title ILIKE '%${userInput}%' OR 
    author ILIKE '%${userInput}%'  OR  
    series ILIKE '%${userInput}%' OR
    genre ILIKE '%${userInput}%'
;`
  );
  return res.rows;
}

//SEARCH BY READ OR NOT READ 

async function searchByRead(userInput) {
  // console.log("The id is: " + userInput);
  const res = await query(userInput ? `SELECT * FROM library WHERE read = 'true'` :
    `SELECT * FROM library WHERE read IS NULL`
  );
  return res.rows;
}

module.exports = { getAllBooks, getBookById, addBook, deleteBook, search, searchByRead, updateBook };
