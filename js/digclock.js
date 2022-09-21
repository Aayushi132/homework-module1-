//Create a time data function//
function currentTime() {
  //Declare variables
  var d = new Date(); //Get current date
  var hr = d.getHours(); //Get current hours
  var min = d.getMinutes(); //Get current minutes
  var sec = d.getSeconds(); //Get current seconds
  var ampm; //Declare emply variable to store Am or Pm
  var utchr = d.getUTCHours(); //Get GMT
  var timeDiff; //To store time difference between GMT and local
  var adjTimeDiff; //To store time difference converted to positive number
  var timeZone; //To store the 4 time zones (PT, MT, CT, ET)
  var timeZoneFullName; //To store full name of TimeZone

  //Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  //Determine AM or PM string
  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  //Run time data every one second
  setInterval(currentTime, 1000);

  var mth = d.getMonth(); //Get current month (0-11)
  //Convert mth index number to actual month number (1-12)

  var monthNum = mth + 1;
  //Determine if currently standard time (summer) by adjusting GMT
  if (monthNum >= 3 && monthNum <= 10) {
    utchr = utchr + 1;
  }

  timeDiff = utchr - hr;

  if (timeDiff < 0) {
    adjTimeDiff = -timeDiff;
  } else {
    adjTimeDiff = timeDiff;
  }

  if (adjTimeDiff == 4 || adjTimeDiff == 8) {
    timeZone = "PT";
  } else if (adjTimeDiff == 6 || adjTimeDiff == 10) {
    timeZone = "CT";
  } else if (adjTimeDiff == 7) {
    timeZone = "ET";
  } else if (adjTimeDiff == 5) {
    timeZone = "MT";
  }

  //timeZone = d.toLocaleDateString(undefined, {day:'2-digit', timeZoneName: 'short' }).substring(3);

  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; //adding time
}

//Initial run of time data function
currentTime();
