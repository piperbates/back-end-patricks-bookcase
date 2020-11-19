const { query } = require("../index");

async function createLibrary() {
    let res = await query(`
    CREATE TABLE library (
            id SERIAL PRIMARY KEY,
            title TEXT,
            author TEXT,
            genre TEXT,
            read BOOLEAN,
            series TEXT,
            leant TEXT)`);
  console.log(res);
}

createLibrary();


