$(function(){
  $('body').on('click', '.delete', function(){
    var $carId=$(this).data('id');
    console.log($carId);
    $.ajax({
      type:'POST',
      url:'http://api.test/api/cars/'+$carId+'/delete',
      success:function(data){
          if(data.hasOwnProperty('error')) {
            console.log(data.error);
          } else {
            $('.col-md-4[data-id="' + $carId + '"]').remove();
          }
      }
    });
  });
});
