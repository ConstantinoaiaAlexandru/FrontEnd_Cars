$(function(){
    $('body').on('click', '#EditSubmit', function(){
      var $manufacturer=$('#manufacturers');
      var $name=$('#name');
      var $modelYear=$('#modelYear');
      var $bodyStyle=$('#bodyStyle');
      var $color=$('#color');
      console.log(window.location.href);
      var urlSplit = window.location.href.split('/');
      console.log(urlSplit);
      var post={
        manufacturer_id: $manufacturer.val(),
        name: $name.val(),
        year_of_production: $modelYear.val(),
        number_of_dors: $bodyStyle.val(),
        color: $color.val(),
      }
      var post =
      $.ajax({
        type:'post',
        url:'http://api.test/api/cars/'+urlSplit[4]+'/edit',
        data:post,
        success:function(editPost){
          console.log(editPost);
          window.location.href="http://apifrontend.test/cars";
        },
        error:function(error){
          console.log(error);
        }
      });
    });
});
