// get all buttons
let buttons = document.querySelectorAll(".timer__button");
let mytimeValue;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    mytimeValue = this.value;
    beBack();
  });
}

//after click start this countdown
setInterval(function () {
  var minutes = Math.floor(mytimeValue / 60);
  var sec = mytimeValue % 60;
  if (mytimeValue > 0) {
    document.getElementById("display__time-left").innerHTML =
      minutes + ":" + sec;
  }
  mytimeValue--;
}, 1000);

//for input box
document
  .getElementById("customMin")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let inputMin = document.getElementById("customMin").value;
      inputBeBack(inputMin);
      setInterval(function () {
        var minutes = Math.floor(inputMin / 60);
        var sec = inputMin % 60;
        if (inputMin > 0) {
          document.getElementById("display__time-left").innerHTML =
            minutes + ":" + sec;
        }
        inputMin--;
      }, 1000);
    }
  });

//Be back for static buttons
//In this section i have Que...
function beBack() {
  var minutes = Math.floor(mytimeValue / 60);
  let currentHours=new Date().getHours();
  let currentMin= new Date().getMinutes();
  let a = currentMin + minutes;
  if (a > 59) {
    let remineingMin = a-60;
 document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours+1} : ${remineingMin}`;
  }
  else{
    let remineingMin2  =currentMin+minutes;
    document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours} : ${remineingMin2}`;
  }
}


//Be back for input buttons
function inputBeBack(inputMin){
  var minutes = Math.floor(inputMin/ 60);
  let currentHours=new Date().getHours();
  let currentMin= new Date().getMinutes();
  let aa = currentMin + minutes;
  if (aa> 59) {
    let remineingMin = aa-60;
 document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours+1} : ${remineingMin}`;
  }
  else{
    let remineingMin2  =currentMin+minutes;
    document.getElementById('display__end-time').innerHTML= `Be Back At ${currentHours} : ${remineingMin2}`;
  }
}
