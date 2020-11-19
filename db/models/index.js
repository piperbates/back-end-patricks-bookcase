const { query } = require("../index");

async function getAllBooks() {
  const res = await query(`
  SELECT * FROM library
    `);
  return res.rows;
}

async function getBookById(id) {
    const res = await query(`
    SELECT * FROM library
    WHERE ID = ${id}
      `);
    return res.rows;
  }

  async function getBookByAuthor(author) {
    const res = await query(`
    SELECT * FROM library
    WHERE AUTHOR = ${author}
      `);
    return res.rows;
  }



module.exports = {getAllBooks, getBookById, getBookByAuthor}