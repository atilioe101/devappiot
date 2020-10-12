const assert = require('assert');
const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const mongoObjectId = mongo.ObjectID;
 
// Connection URL and  Database Name +++++++++++
const url = 'mongodb://localhost:27017';
const dbName = 'Fabrica';
// +++++++++++++++++++++++++++++++++++++++++++++

var db = null;
var Wrapper = function(){
    this.db = null;
    this.ObjectID = null;
    this.init();
};

Wrapper.prototype.init = function(){
    var wrapper = this;
    // Use connect method to connect to the server
    mongoClient.connect(url,{useUnifiedTopology: true}, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server"); 
        wrapper.ObjectID = mongoObjectId;
        wrapper.db = client.db(dbName);         
    });
}

module.exports = new Wrapper();