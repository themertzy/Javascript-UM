function  isDateObj(myDate) {
    return  myDate.constructor.toString().indexOf("Date") > -1;
 }

 function  isDateFunc(myDate) {
    return  myDate.constructor  === Date;
 }