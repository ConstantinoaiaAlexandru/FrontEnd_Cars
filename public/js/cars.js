$(function(){

  var $cars=$('#car-body');

  $.ajax({
    type:'GET',
    url:'http://api.test/api/cars',
    success:function(cars){
      console.log(cars);
      $.each(cars.data,function(i,car){
        console.log(i);
        console.log(car);
        var carUrl = '/cars/' + car.id;
        var carUrlEdit = '/cars/' + car.id+'/edit';
        $cars.append('<div class="col-md-4" data-id="'+car.id+'">'+
          '<div class="card mb-4 box-shadow">'+
            // '<img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">'+
            '<div class="card-body">'+
              '<p>Car name: ' + car.name + '</p>'+
              '<div class="d-flex justify-content-between align-items-center">'+
                '<div class="btn-group">'+
                  '<a href="' + carUrl + '" class="btn btn-sm btn-outline-secondary">View</a>'+
                  '<a href="' + carUrlEdit + '" class="edit btn btn-sm btn-outline-secondary">Edit</a>'+
                  '<a data-id="' + car.id + '" class="delete btn btn-sm btn-outline-secondary">Delete</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>');
      });
    }, error: function(error) {
        console.log(error);
    }
  });
});
