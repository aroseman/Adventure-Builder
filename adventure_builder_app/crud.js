const MongoClient = require('mongodb').MongoClient;
const config = require('./settings.json')

const uri = "mongodb+srv://" + config.username + ":" + config.password + "@adventurebuilder.3wnez.mongodb.net/AdventureBuilder?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if(err) {
        return console.log(err)
    }
  const collection = client.db("test").collection("devices");
  console.log(collection)
  client.close();
});