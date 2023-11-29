const { MongoClient, ObjectId } = require("mongodb");

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

async function add_user(name, age) {
  const connectDB = await conenction;
  const insert_user = await connectDB
    .db("belajar_crud")
    .collection("user")
    .insertOne({ name, age });

  return insert_user;
}

async function update_user(id, name, age) {
  const connectDB = await conenction;
  const update_user = await connectDB
    .db("belajar_crud")
    .collection("user")
    .updateOne({ _id: new ObjectId(id) }, { name, age });

  return update_user;
}

get_users();

const names = ["Fadhil", "Pandhu", "Sulthan", "Beni", "Lenovo"];

add_user(
  names[Math.floor(Math.random() * names.length)],
  Math.floor(Math.random() * 20)
);

update_user("65668452b464cd29c5b465d9", "Ahsan gaming", 17);
