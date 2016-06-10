
function testIterate(reditObject){
  var redditChild= reditObject.data.children;

  redditChild.forEach(createArticles)
}

function createArticles(object)
{
  $('#reddit').append(returnArticle(object.data));
}


function returnArticle(redditObject){
  var articleDiv=document.createElement('div');
  var titleDiv=getDivWithData(redditObject.title);
  var dataDiv=getDivWithData(redditObject.selftext);
  var authorDiv=getDivWithData(redditObject.author);
  var dateDiv=getDivWithData(redditObject.date);

  articleDiv.setAttribute('class','article');
  titleDiv.setAttribute('class','title');
  dataDiv.setAttribute('class','data');
  authorDiv.setAttribute('class','author');
  dateDiv.setAttribute('class','date');

  articleDiv.appendChild(titleDiv);
  articleDiv.appendChild(dataDiv);
  articleDiv.appendChild(authorDiv);
  articleDiv.appendChild(dateDiv);

  return articleDiv;
}

function getDivWithData(dataValue){
  var returnDiv=document.createElement('div');
  var textNode=document.createTextNode(dataValue);

  returnDiv.appendChild(textNode);

  return returnDiv;
}