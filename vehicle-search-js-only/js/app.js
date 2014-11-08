$(function(){
  var vehicleList = new VehicleCollection(  $("#vehicle-list"), $("#gridtpl") );
  
  $("#add-vehicle-btn").on('click',function(){
    if($("#vehicle-type").val() === $("#vehicle-type option:eq(0)").val()){
      $("#vehicle-type").focus();
    }
    else{
      vehicleList.addVehicle(new Vehicle($("#vehicle-type").val(),$("#vehicle-make").val(),$("#vehicle-model").val()));

      //reset fields
      $("#vehicle-type").val($("#vehicle-type option:eq(0)").val());
      $("#vehicle-make,#vehicle-model").val('');
    }
  });

  $(".search-box input[type='text']").on('keyup',function(evt){
    if($(this).val().length>2){
      //trigger
      vehicleList.queryVehicle($(this).val());
    }
    else{
      vehicleList.render();
    }
  });

});