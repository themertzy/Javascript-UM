function currentDay() {
   let day;
   switch (new Date().getDay()) {
   case 0:
      day = "Sunday";
      return day
      break;
   case 1:
      day = "Monday";
      return day
      break;
   case 2:
      day = "Tuesday";
      return day
      break;
   case 3:
      day = "Wednesday";
      return day
      break;
   case 4:
      day = "Thursday";
      return day
      break;
   case 5:
      day = "Friday";
      return day
      break;
   case  6:
      day = "Saturday";
      return day
      break;
   default:
      day = "unknown";
      return day
   }
}

function  isDateObj(myDate) {
   return  myDate.constructor.toString().indexOf("Date") > -1;
}

function  isDateFunc(myDate) {
   return  myDate.constructor  === Date;
}