import { MongoClient } from "mongodb";
const url = `mongodb+srv://mongodb:MOngodb%401234@cluster1.nvfmxer.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

export async function insertToMongo(data) {
  try {
    const database = client.db("shipping");
    const formOrders = database.collection("formOrders");
    const result = await formOrders.insertOne(data);
    return result;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

export async function listDatabases() {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
