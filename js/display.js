/**
 * Iterates through articles in JSON object
 * @param  {Array from JSON} reditObject [description]
 * @return {undefined}
 */
function iterateReddit(reditObject){
  var redditChild= reditObject.data.children;

  redditChild.forEach(createArticles)
}

/**
 * Retrieves Article layout and appends to #reddit which is the main container
 * @object {JSON} Sends JSON data to Article
 * @return undefined
 */
function createArticles(object)
{
  $('#reddit').append(returnArticle(object.data));
}

/**
 * This function generates the layout for each Ariticle
 * @param  {JSON} reddit JSON for a specific article
 * @return {div.article}              Ariticle Layout
 */
function returnArticle(redditObject){
  var articleDiv=getDivWithData('','article');
  var linkURL=makeLink(redditObject.title,redditObject.url);  
  var titleDiv=getDivWithData('','title');  // using linkURL instead, it contains the title  redditObject.title
  var imgDataDiv=getDivWithData('','imgDataDiv');
  var dataDiv=getDivWithData(redditObject.selftext,'data');
  var authorDiv=getDivWithData(redditObject.author,'author');
  var dateDiv=getDivWithData(getRedditLikeDate(redditObject.created,'date'));
  var authorDateDiv=getDivWithData('','authorDate');
  var thumbNailDiv=getDivWithData('','thumbNail');
  var image=makeImage('',redditObject.thumbnail);
  
  thumbNailDiv.appendChild(image);

  titleDiv.appendChild(linkURL);
  articleDiv.appendChild(titleDiv);
  //articleDiv.appendChild(thumbNailDiv);

  articleDiv.appendChild(imgDataDiv);
  imgDataDiv.appendChild(thumbNailDiv);
  imgDataDiv.appendChild(dataDiv);  

  authorDateDiv.appendChild(authorDiv);
  authorDateDiv.appendChild(dateDiv);
  articleDiv.appendChild(authorDateDiv);
 // articleDiv.appendChild(thumbNailDiv);




  return articleDiv;
}

/**
 * creates Div and Returns it
 * @param  {string} dataValue text betweeen open and close div tags
 * @return {div}           created Div
 */
function getDivWithData(dataValue,className){
  var returnDiv=document.createElement('div');
  returnDiv.setAttribute('class',className);
  var textNode=document.createTextNode(dataValue);

  returnDiv.appendChild(textNode);

  return returnDiv;
}


/**
 * [getRedditLikeDate description]
 * @param  {int} thisTime reddit DateTime
 * @return {String}          Converted Date String
 *
 * Needed to convert int 
 * sample date 1464936989  
 * reddit
 * 1464936989
 * Normal
 * 1294862756114
 */
function getRedditLikeDate(thisTime){
  var thisDate=new Date(thisTime*1000);

  return thisDate.toString();
}

/**
 * creates title link to reddit provided url
 * @param  {string} text display in link
 * @param  {string} url  url target
 * @return {a}      <a> element
 */
function makeLink(text,url){
  var a = document.createElement('a');
  var linkText = document.createTextNode(text);
  a.appendChild(linkText);
  a.title = text;
  a.href = url;

  return a;
}

function makeImage(text, url){
  if(url=='self')
  {
    url= 'http://b.thumbs.redditmedia.com/vt2WP_Pa5hlnnU3JO_mq-a3kGGd08Z4OOhJs20EzUsE.jpg';
  }
  var img=document.createElement('img');
  img.src=url;

  return img;
}