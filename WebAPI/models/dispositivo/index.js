
function dispositivoModel(mongo) {   
    this.ref = 'Dispositivos';    
    this.mongo = mongo;     
}  

dispositivoModel.prototype.find= function(query, callback) {  
    this.mongo.db.collection(this.ref).find(query).toArray(callback);        
}
    
dispositivoModel.prototype.findOne= function(_id, callback) {
    var query = {_id: new this.mongo.ObjectID(_id) };
    this.mongo.db.collection(this.ref).find(query).toArray(callback);  
}

dispositivoModel.prototype.create= function(data, callback) {      
    this.mongo.db.collection(this.ref).insertOne(data, {w:1}, callback);
}

dispositivoModel.prototype.update= function(data, callback) {
    var id = {_id: new this.mongo.ObjectID(data._id)};
    var query = {$set: {'nombre' : data.nombre, 'ubicacion' : data.ubicacion }};    

    this.mongo.db.collection(this.ref).updateOne(id, query, callback);
}

dispositivoModel.prototype.delete= function(id, callback) {
    var _id = {_id: new this.mongo.ObjectID(id)};    
    this.mongo.db.collection(this.ref).deleteOne(_id, callback);
}

module.exports = function (mongo) {
    return new dispositivoModel(mongo);
};
