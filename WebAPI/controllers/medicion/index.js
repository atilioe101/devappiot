function medicionController(model) {
    this.model = model;      
}   

function getInputParam(dispId) {    
    if (dispId) {
        var id = parseInt(dispId);
        if (isNaN(id)) return 0;
        return id;
    }
    return 0;
}
    
medicionController.prototype.getByDispId= function(req, res, next) {
    var dispId = getInputParam(req.params.dispId);   
    
    if (dispId > 0) {                
        this.model.findDispId(dispId, function(err, data) {
            if (err) return next(err);
            res.send(data);        
        });   
        return;
    }   
    var err = new Error('Not found');
    err.status = 404;
    next(err);     
};    

module.exports = function (model) {
    return new medicionController(model);
};
