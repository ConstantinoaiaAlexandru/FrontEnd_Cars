$(function(){
  $('body').on('click', '.manufacturersDelete', function(){
    var $manufacturersId=$(this).data('id');
    console.log($manufacturersId);
    $.ajax({
      type:'POST',
      url:'http://api.test/api/manufacturers/'+$manufacturersId+'/delete',
      success:function(data){
          if(data.status == 'error') {
            alert(data.msg);
          } else if(data.status == 'success') {
              $('.col-md-4[data-id="' + $manufacturersId + '"]').remove();
          }
      }
    });
  });
});
