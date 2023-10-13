const mysql = require("mysql");
const pool = mysql.createPool({
connectionLimit: 100,
host: "localhost",
user: "root",
password: "",
database: "dtdm",
debug: false,
});

pool.query("SELECT * from username LIMIT 10", (err, rows) => {
if (err) {
console.log("error occurred during the connection.");
}
console.log(rows[0]);
});