$(function(){

  var $manufacturerEdit=$('#manufacturerEdit');
  $.ajax({
    type:'GET',
    url:'http://api.test/api/manufacturers/'+$manufacturerEdit.data('id'),
    success:function(manufacturerEdit){
      console.log('http://api.test/manufacturers/'+$manufacturerEdit.data('id')+'/edit');
      console.log(manufacturerEdit);
      $manufacturerEdit.html('<div class="col-md-1">'+
      '</div>'+
      '<div class="col-md-10">'+
      '<form class="form-control editForm" action="#" method="get">'+
      '<p>'+
      '<span class="spanManufacturerEdit">Manufacturer Name:</span>'+
      '<input class="inputManufacturerEdit" type="text" value="'+manufacturerEdit.data.name+'">' +
      '</p>'+
      '</form>'+
      '<button class="carManufacturerButton btn btn-success" type="button">Edit</button>'+
      '</div>'+
      '<div class="col-md-1">'+
      '</div>');
    }, error: function(error) {
      console.log(error);
    }
  });
});
