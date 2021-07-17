var hour = 0;
var min = 0;
var second = 0;
var milsec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secondHeading = document.getElementById("second");
var milsecHeading = document.getElementById("milsec");
var interval;


function time() {
    
    milsec++
    milsecHeading.innerHTML = milsec;
    if (milsec >= 100) {
        second++
        secondHeading.innerHTML = second
        milsec = 0;
    } else if (second >=60) {
        second = 0;
        min++
        minHeading.innerHTML = min;
        rmt();
    } else if (min >=60) {
        hour++
        min = 0;
        hourHeading.innerHTML = hour;
        rst();
    }
}

function start() {
    interval = setInterval(time, 10);
    document.getElementById("start").setAttribute("disabled", "");
}
function stop() {
    document.getElementById("start").removeAttribute("disabled");
    clearInterval(interval);
}
function reset() {
    stop()
    hour = 0;
    min = 0;
    second = 0;
    milsec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secondHeading.innerHTML = second;
    milsecHeading.innerHTML = milsec;

}

function rst() {
    min = 0;
    second = 0;
    milsec = 0;
    minHeading.innerHTML = min;
    secondHeading.innerHTML = second;
    milsecHeading.innerHTML = milsec;

}
function rmt() {
    second = 0;
    milsec = 0;
    secondHeading.innerHTML = second;
    milsecHeading.innerHTML = milsec;

} 
function snap() {
    if(milsec == 0){
      alert("Ther is nothing to snap")
        
    }else{
        var naps = document.getElementById('snaps');
        naps.innerHTML += hour + ' : ' + min + ' : ' + second + " : " + milsec + '<br />';
        document.getElementById("snap").removeAttribute("disabled");
    }
       
}