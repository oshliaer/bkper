function install(){}

function doGet(e) {
  var cs = ContentService.createTextOutput();
  cs.setMimeType(ContentService.MimeType.TEXT);
  try{
    //test of an action
    if(!things.hasOwnProperty(e.parameter.action))
      throw 'The action "' + e.parameter.action + '" does not exist.';
    //the short line for a call an action
    var result = things.set(e)[e.parameter.action]();
    return cs.setContent(result);
  }catch(e){
    return cs.setContent(e).setMimeType(ContentService.MimeType.JSON);
  }
}