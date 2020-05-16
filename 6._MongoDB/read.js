const mongoClient = require("mongodb").MongoClient

const connectionUrl = "mongodb://localhost:27017"

const dbName = "bigcatszoo"

mongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    const bigCatsDB = client.db(dbName)

    const cats = bigCatsDB.collection("cats")

    // find the bobcat
    cats.find({species: "Bobcat"}).limit(3).toArray((error, foundCats) => {
        console.log(foundCats)
        client.close()
    })
})



