const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/dtdm';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log(err);
    process.exit(1); // Exit with an error code
  }
  
  const db = client.db("dtdm"); // Define the "db" object within this scope

  let data = { id: 100, name: "Shahid" };
  console.log("Database connected!");

  db.collection("user").findOne({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit(1); // Exit with an error code
    }
    console.log("Record added.");
    console.log(result);
    client.close(); // Close the client connection
  });
});
