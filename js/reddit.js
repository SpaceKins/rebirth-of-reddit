$.ajax({
  method: 'GET',
  url: 'http://www.reddit.com/r/webdev.json',
  dataType: 'json'
})
.done(function(data) {
  //handle successful response
  var verify=data;
  
  iterateReddit(data);
})
.fail(function() {
  //Handle errors
  //handleError();
})
.always(function() {
  //Always update the UI with status
});




//createArticles({title:"TITLE",author:"AUTHOR",date:"DATE",data:"DATA"});

//$('#reddit').append('div')
//