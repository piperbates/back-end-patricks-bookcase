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

//PUSH REQUESTS

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

//SEARCH BY TITLE
async function search(userInput) {
  console.log("The id is: " + userInput);
  const res = await query(
    `SELECT * FROM library WHERE title ILIKE '%${userInput}%' OR 
    author ILIKE '%${userInput}%'  OR  
    series ILIKE '%${userInput}%'
;`
  );
  return res.rows;
}

module.exports = { getAllBooks, getBookById, addBook, deleteBook, search };
