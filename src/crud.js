const { MongoClient } = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const config = require('./settings.json')

const uri = "mongodb+srv://" + config.username + ":" + config.password + "@adventurebuilder.3wnez.mongodb.net/AdventureBuilder?retryWrites=true&w=majority";
const client = new MongoClient(uri);

function CreateDocument() {

}

// function ReadDocument(_id) {
//     MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
//         if (err) {
//             return console.log('Unable to connect to DB');
//         }
//         const db = client.db(config.database);
//         db.collection('dungeon_goals').findOne({
//             "_id": ObjectId("5fe8e7d8e7f29a16f1964bbf")
//         }, (err, goal) => {
//             if (err) {
//                 return console.log('Unable to fetch')
//             }
//             console.log(goal)
//         })
//     })
// }
async function ReadDocument(_id) {
    try {
        // connect the client to the server.
        await client.connect();

        // establish and verify the connection.
        await client.db(config.database).command({ ping: 1});
        console.log("Connected successfully to server.")
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
// MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to DB');
//     }
//     const db = client.db(config.database);
//     db.collection('dungeon_goals').findOne({
//         "_id": ObjectId("5fe8e7d8e7f29a16f1964bbf")
//     }, (err, goal) => {
//         if (err) {
//             return console.log('Unable to fetch')
//         }
//         console.log(goal)
//     })
// })


module.exports = {CreateDocument, ReadDocument};