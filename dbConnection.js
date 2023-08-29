const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223036596:maryam@cluster0.bmwadx9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;