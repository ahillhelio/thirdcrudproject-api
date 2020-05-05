const MongoClient = require('mongodb').MongoClient;
//const ObjectID = require("mongodb").ObjectID;
const assert = require('assert');

const url = process.env.DB_URL;

const dbName = "thirdcrudproject";
const colName = "catalog_entries";
const settings = { useUnifiedTopology: true }

const getEntry = () => {
    
    const iou = new Promise ((resolve,reject) => {
        
        MongoClient.connect(url, settings, function(err, client) {
            if(err){
                reject(err);
            } else {
                console.log("Connected successfully to GET Catalog Entry");
                const db = client.db(dbName); //should be the same
                const collection = db.collection(colName); //should be the same
                collection.find({}).toArray(function(err, docs) { //Array?
                        if (err) {
                            reject(err);
                        } else { 
                            console.log("Found the Following");
                            console.log(docs);
                            resolve(docs);
                            client.close();
                        }
                        
                 });    
            }
        });
    });
    return iou;
}

module.exports = {
    getEntry
}