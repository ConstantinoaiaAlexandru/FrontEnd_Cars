$(function(){

  var $carEdit=$('#carEdit');
  $.ajax({
    type:'GET',
    url:'http://api.test/api/cars/'+$carEdit.data('id'),
    success:function(carEdit){
      console.log('http://api.test/cars/'+$carEdit.data('id')+'/edit');
      console.log(carEdit);
      $.ajax({
        type:'GET',
        url:'http://api.test/api/manufacturers',
        success:function(manufacturers){
          console.log(manufacturers);
          var options = '';
          $.each(manufacturers.data,function(i,manufacturer){
            options += '<option value="'+manufacturer.id+'">'+manufacturer.name+'</option>';
          });
          $carEdit.html('<div class="col-md-1">'+
          '</div>'+
          '<div class="col-md-10">'+
          '<form class="form-control editForm" action="#" method="get">'+
          '<p>'+
          '<span class="spanCarEdit">Name:</span>'+
          '<input class="inputCarEdit" type="text" value="'+carEdit.car.name+'">' +
          '</p>'+
          '<hr>'+
          '<p>'+
          '<span class="spanCarEdit">Manufacturer name:</span>'+
          '<select class="manufacturersForE" name="manufacturer-name" id="manufacturersForEdit">'+
            options +
          '</select>'+
          '</p>'+
          '<hr>'+
          '<p>'+
          '<span class="spanCarEdit">Year of Production:</span>'+
          '<input class="inputCarEdit" type="number" value="'+carEdit.car.year_of_production+'">' +
          '</p>'+
          '<hr>'+
          '<p>'+
          '<span class="spanCarEdit">Number of Dors:</span>'+
          '<input class="inputCarEdit" type="number" value="'+carEdit.car.number_of_dors+'">' +
          '</p>'+
          '<hr>'+
          '<p>'+
          '<span class="spanCarEdit">Color:</span>'+
          '<input class="inputCarEdit" type="color" value="'+carEdit.car.color+'">' +
          '</p>'+
          '</form>'+
          '<button class="carEditButton btn btn-success" type="button" id="EditSubmit">Edit</button>'+
          '</div>'+
          '<div class="col-md-1">'+
          '</div>');
        },error:function(error){
          console.log(error);
        }
      });
    }, error: function(error) {
      console.log(error);
    }
  });
});
