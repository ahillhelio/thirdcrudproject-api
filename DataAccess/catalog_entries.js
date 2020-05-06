const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;
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

const createEntry = (entry) => {
    const iou = new Promise ((resolve,reject) => {         
        MongoClient.connect(url, settings, async function (err,client){
            if(err){
                console.log("This is that 404 we were talking about");
                reject(err);      
            } else{
                console.log("Connected successfully to server to POST a new Entry");
                const db = client.db(dbName);
                const collection = db.collection(colName)
                //will likely need to change this part
                collection.insertMany (entry, (err, result) => {
                    if(err){
                        reject(err);  
                    } else {
                        resolve(result.ops); 
                        client.close();
                    }
                })
            }
        })
    });
    return iou 
}

const deleteEntry = async (id) => {
    const iou = new Promise ((resolve, reject) => {
        MongoClient.connect(url, settings, async function (err, client) {
            if(err){
                reject(err);
            }else{
                console.log("Connected to DB to DELETE Entry");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                console.log(collection)
                collection.deleteMany({_id: ObjectID(id)}, (err, result) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(true);
                        client.close();
                    }
                })
            }
        })
    })
    return iou
}
    


module.exports = {
    getEntry,
    createEntry,
    deleteEntry
};