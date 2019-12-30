import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  highLight(word, inputValue) {
    if(inputValue!==undefined){
      var index = word.toLowerCase().indexOf(inputValue.toLowerCase());
      if (index >= 0) {
        let highlight = word.substring(0, index) + "<span class='highlight'>" + word.substring(index, index + inputValue.length) + "</span>" + word.substring(index + inputValue.length, word.length);
        return highlight;
      }
      else {
        return word
      }
    }
    else{
      return word
    }
  }

}
