$(function(){
  $('#post-manufacturer').on('click',function(){
    var $manufacturerName=$('#manufacturerName');
    console.log($manufacturerName);
    var post={
      name: $manufacturerName.val(),
    }
    $.ajax({
      type:'POST',
      url:'http://api.test/api/manufacturers',
      data:post,
      success:function(newPost){
        console.log(newPost);
        window.location.href="http://apifrontend.test/manufacturers";
      },
      error:function(error){
        console.log(error);
      }
    });
  });
});
