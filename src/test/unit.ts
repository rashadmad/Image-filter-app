var validUrl = require('valid-url');

//receive
export const urlReceived = (url: string) => {
    if (validUrl.isUri(url)){
      return true;
    } 
    else {   
      return false;   
    }
  }