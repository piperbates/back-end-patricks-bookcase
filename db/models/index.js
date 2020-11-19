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
      [
        book.title,
        book.author,
        book.genre,
        book.read,
        book.series,
        book.leant
      ]
    );
    return res;
  }


module.exports = {getAllBooks, getBookById, addBook}