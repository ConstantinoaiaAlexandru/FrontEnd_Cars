$(function(){

  var $manufacturers=$('#manufacturer-body');

  $.ajax({
    type:'GET',
    url:'http://api.test/api/manufacturers',
    success:function(manufacturers){
      console.log(manufacturers);
      $.each(manufacturers.data,function(i,manufacturer){
        console.log(i);
        console.log(manufacturer);
        // var manufacturerUrl = '/manufacturers/' + manufacturer.id;
        var manufacturerUrlEdit = '/manufacturers/' + manufacturer.id+'/edit';
        $manufacturers.append('<div class="col-md-4" data-id="'+manufacturer.id+'">'+
          '<div class="card mb-4 box-shadow">'+
            // '<img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">'+
            '<div>'+
              '<p class="card-body">Manufacturer name: ' + manufacturer.name + '</p>'+
              '<div class="d-flex justify-content-between align-items-center">'+
                '<div class="btn-group">'+
                  // '<a href="' + manufacturerUrl + '" class="btn btn-sm btn-outline-secondary">View</a>'+
                  '<a href="' + manufacturerUrlEdit + '" class="btn btn-sm btn-outline-secondary">Edit</a>'+
                  '<a data-id="' + manufacturer.id + '" class="manufacturersDelete btn btn-sm btn-outline-secondary">Delete</a>'+
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
