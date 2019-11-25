var validUrl = require('valid-url');

var url = "http://bla.com"


//receive
export const urlReceived = (url: string) => {
    if (validUrl.isUri(url)){
      return true;
    } 
    else {   
      return false;   
    }
  }