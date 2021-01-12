const MongoClient = require('mongodb').MongoClient;
const config = require('./settings.json')

const uri = "mongodb+srv://" + config.username + ":" + config.password + "@adventurebuilder.3wnez.mongodb.net/AdventureBuilder?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function CreateDocument() {
    client.connect(err => {
        if(err) {
            return console.log(err);
        }
      const db = client.db(config.database);
      client.close();
    });
}

function ReadDocument() {
    client.connect(err => {
        if(err) {
            return console.log(err);
        }
        const db = client.db(config.database);
        client.close();
    })
}

function UpdateDocument() {
    client.connect(err => {
        if(err) {
            return console.log(err);
        }
        const db = client.db(config.database);
        client.close();
    })
}

function DeleteDocument() {
    client.connect(err => {
        if(err) {
            return console.log(err);
        }
        const db = client.db(config.database);
        client.close();
    })
}
