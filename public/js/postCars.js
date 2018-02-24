$(function(){
  $('#post-car').on('click',function(){
    var $manufacturer=$('#manufacturers');
    var $name=$('#name');
    var $modelYear=$('#modelYear');
    var $bodyStyle=$('#bodyStyle');
    var $color=$('#color');
    console.log($manufacturer);
    var post={
      manufacturer_id: $manufacturer.val(),
      name: $name.val(),
      year_of_production: $modelYear.val(),
      number_of_dors: $bodyStyle.val(),
      color: $color.val(),
    }
    $.ajax({
      type:'POST',
      url:'http://api.test/api/cars',
      data:post,
      success:function(newPost){
        console.log(newPost);
      },
      error:function(error){
        console.log(error);
      }
    });
  });
});
