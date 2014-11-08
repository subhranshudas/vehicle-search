/*
 *  Vehicle POJsO 
 */
var Vehicle = function(type,make,model){
	  this.type = type;
	  this.make = make;
	  this.model = model;
  return this;
};

/*
 *  VehicleCollection(DOM element, templateID) 
 */
var VehicleCollection = function(rootEle,tpl){ 
  this.list = [];
  this.template = _.template(tpl.html());
  this.addVehicle = function(vehicle){ this.list.push(vehicle);this.render(); };
  this.queryVehicle = function(query){
    var resultset = [],that = this;

     _.each(that.list,function(vehicle){
          _.each(_.values(vehicle),function(txt){
                if(txt.indexOf(query)!== -1){
                      resultset.push(vehicle);
                }
          });
      });

    //re-render
    if(resultset.length === 0){
      rootEle.html("<div class='error'>No results found!<div>");
    }
    else{
      rootEle.html(this.template({ list : resultset }));
    }
  };
  this.render = function(){ 
   	rootEle.html(this.template({ list : this.list }));
  };
  return this;
};