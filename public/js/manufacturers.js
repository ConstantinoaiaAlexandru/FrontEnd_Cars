$(document).ready(function(){
  var $manufacturers=$('#manufacturers');
  $.ajax({
    type:'GET',
    url:'http://api.test/api/manufacturers',
    success:function(manufacturers){
      console.log(manufacturers);
      $.each(manufacturers.data,function(i,manufacturer){
        $manufacturers.append('<option value="'+manufacturer.id+'">'+manufacturer.name+'</option>');
      });
    },error:function(error){
      console.log(error);
    }
  });
});
