$("#btn").click(function(){
    $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    console.log(data.file);
      var source = (data.file);
    $("#changer").attr("src", source);
  })
  .fail(function(){
    console.log("PROBLEM!");
  })
});

$("#getBtn").click(function(){
  $.get('https://dog.ceo/api/breeds/image/random')
  .done(function(data){
    var source = (data.message);
    $("#changer").attr("src", source);
  })
  .fail(function(){
    console.log("ERROR!");
  })
});