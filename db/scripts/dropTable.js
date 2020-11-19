const { query } = require("../index");

async function dropLibrary() {
  let res = await query(`DROP TABLE library;`);
  console.log(res);
}

dropLibrary();
