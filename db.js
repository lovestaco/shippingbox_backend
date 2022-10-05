const { MongoClient } = require("mongodb");
const url = `mongodb+srv://mongodb:MOngodb%401234@cluster1.nvfmxer.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

module.exports = {
  insertToMongo: async function (data) {
    try {
      const database = client.db("shipping");
      const formOrders = database.collection("formOrders");
      const result = await formOrders.insertOne(data);
      console.log(result);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  },
  listDatabases: async function () {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
  },
};
