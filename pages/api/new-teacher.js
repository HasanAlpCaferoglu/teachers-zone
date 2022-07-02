// url of this file /api/new-teacher
// if any request sent to this url, it will triger the function which is defined in this file

import { MongoClient } from "mongodb";

async function handler(req, res) {
  const MONGODB_CONNECT_KEY = process.env.MONGODB_CONNECT_KEY;

  try {
    if (req.method === "POST") {
      const data = JSON.parse(req.body); // getting data from the request body

      const client = await MongoClient.connect(`${MONGODB_CONNECT_KEY}`);
      const db = client.db(); // access to the database

      const teachersCollection = db.collection("teachers"); // getting access to the connection;

      const result = await teachersCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: "Teacher inserted!" });
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default handler;
