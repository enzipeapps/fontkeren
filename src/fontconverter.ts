import FontsCharacter from "./fontcharacterModel";

import * as vscode from 'vscode';

export default class FontConverter {
    static convertText( text:string,   model:FontsCharacter) {
    let list:string[] = text.split('');
    for (var data in list) {
        
      list[list.indexOf(list[data])] = FontConverter._getText(list[data], model);
    }
    
    return list.join("");
  }

  static  _getText( text:string, model:FontsCharacter) {

    switch (text) {
      case "0":
        return model.zero;
      case "1":
        return model.one;
      case "2":
        return model.two;
      case "3":
        return model.three;
      case "4":
        return model.four;
      case "5":
        return model.five;
      case "6":
        return model.six;
      case "7":
        return model.seven;
      case "8":
        return model.eight;
      case "9":
        return model.nine;
      case "A":
        return model.capitala;
      case "B":
        return model.capitalb;
      case "C":
        return model.capitalc;
      case "D":
        return model.capitald;
      case "E":
        return model.capitale;
      case "F":
        return model.capitalf;
      case "G":
        return model.capitalg;
      case "H":
        return model.capitalh;
      case "I":
        return model.capitali;
      case "J":
        return model.capitalj ;
      case "K":
        return model.capitalk;
      case "L":
        return model.capitall;
      case "M":
        return model.capitalm;
      case "N":
        return model.capitaln;
      case "O":
        return model.capitalo;
      case "P":
        return model.capitalp;
      case "Q":
        return model.capitalq;
      case "R":
        return model.capitalr;
      case "S":
        return model.capitals;
      case "T":
        return model.capitalt;
      case "U":
        return model.capitalu;
      case "V":
        return model.capitalv;
      case "W":
        return model.capitalw;
      case "X":
        return model.capitalx;
      case "Y":
        return model.capitaly;
      case "Z":
        return model.capitalz;

      case "a":
        return model.smalla;
      case "b":
        return model.smallb;
      case "c":
        return model.smallc;
      case "d":
        return model.smalld;
      case "e":
        return model.smalle;
      case "f":
        return model.smallf;
      case "g":
        return model.smallg;
      case "h":
        return model.smallh;
      case "i":
        return model.smalli;
      case "j":
        return model.smallj;
      case "k":
        return model.smallk;
      case "l":
        return model.smalll;
      case "m":
        return model.smallm;
      case "n":
        return model.smalln;
      case "o":
        return model.smallo;
      case "p":
        return model.smallp;
      case "q":
        return model.smallq;
      case "r":
        return model.smallr;
      case "s":
        return model.smalls;
      case "t":
        return model.smallt;
      case "u":
        return model.smallu;
      case "v":
        return model.smallv;
      case "w":
        return model.smallw;
      case "x":
        return model.smallx;
      case "y":
        return model.smally;
      case "z":
        return model.smallz;
      default:
        return text;
    }
  }
}


