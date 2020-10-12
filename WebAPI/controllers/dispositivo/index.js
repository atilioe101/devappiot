function dispositivoController(model) {
    this.model = model;      
}   

dispositivoController.prototype.getAll = function(req, res, next) {        
    this.model.find({},function(err, data) {
        if (err) return next(err);
        res.send(data);              
    });   
};
    
dispositivoController.prototype.getById= function(req, res, next) {
    var _id = req.params._id;

    this.model.findOne(_id, function(err, data) {
        if (err)  return next(err);
        res.json(data);
    });   
};
    
dispositivoController.prototype.create= function(req, res, next) {
    var body = req.body;

    this.model.create(body, function(err, data) {
        if (err) return next(err);
        res.json(data);
    });   
};
    
dispositivoController.prototype.update= function(req, res, next) {    
    var body = req.body;

    this.model.update(body, function(err, data) {
        if (err) return next(err);
        res.json(data);
    });       
};

dispositivoController.prototype.delete= function(req, res, next) {    
    var id = req.params.id;

    this.model.delete(id, function(err, data) {
        if (err) return next(err);
        res.json(data);
    });       
};

module.exports = function (model) {
    return new dispositivoController(model);
};
