const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const mongo_client = new MongoClient(uri);
const conenction = mongo_client.connect();

async function get_users() {
  const connectDB = await conenction;
  const users = await connectDB
    .db("belajar_crud")
    .collection("user")
    .find({})
    .toArray();

  console.log(users);
}

get_users();
