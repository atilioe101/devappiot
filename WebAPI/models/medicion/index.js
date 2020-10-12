function medicionModel(mongo) {   
    this.ref = 'Mediciones';    
    this.mongo = mongo;     
}


medicionModel.prototype.findDispId= function(dispId, callback) {  
    this.mongo.db.collection(this.ref).find({'dispositivoId' : dispId.toString()},{}).sort({'fecha': - 1}).toArray(callback);        
}


module.exports = function (mongo) {
    return new medicionModel(mongo);
};
