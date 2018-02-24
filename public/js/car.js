$(function(){

  var $car=$('#car');

  $.ajax({
    type:'GET',
    url:'http://api.test/api/cars/' + $car.data('id'),
    success:function(car){
      console.log('http://api.test/api/cars/' + $car.data('id'));
      console.log(car);
      car = car.car;
      $car.append('<div class="col-md-1">'+
      '</div>'+
      '<div class="carView col-md-10">'+
      '<p class="carDetail">Name:'+'<strong>'+car.name +'</strong>'+'</p>'+
      '<hr>'+
      '<p class="carDetail">Manufacturer name:'+'<strong>'+car.manufacturer_name +'</strong>'+'</p>'+
      '<hr>'+
      '<p class="carDetail">Year of Production:'+'<strong>'+car.year_of_production +'</strong>'+'</p>'+
      '<hr>'+
      '<p class="carDetail">Number of Dors:'+'<strong>'+car.number_of_dors +'</strong>'+'</p>'+
      '<hr>'+
      '<p class="carDetail">Color:'+'<strong>'+car.color +'</strong>'+'</p>'+
      '</div>'+
      '<div class="col-md-1">'+
      '</div>');
    }, error: function(error) {
      console.log(error);
    }
  });
});
