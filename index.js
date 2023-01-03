// Set the date we're counting down to
var countDownDate = new Date("February 1, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + ":" + (hours < 10 ? "0" + hours : hours) + ":"
  + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("countdown2").innerHTML = days + ":" + (hours < 10 ? "0" + hours : hours) + ":"
  + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


function leftImage() {
  const images = document.getElementsByName("image");
  const image1 = window.getComputedStyle(images[0]).getPropertyValue("background");
  const image2 = window.getComputedStyle(images[1]).getPropertyValue("background");

  images[0].style.background = image2;
  images[1].style.background = image1;
}

function rightImage() {
  const images = document.getElementsByName("image");
  const image1 = window.getComputedStyle(images[0]).getPropertyValue("background");
  const image2 = window.getComputedStyle(images[1]).getPropertyValue("background");

  images[0].style.background = image2;
  images[1].style.background = image1;
}

function leftImage2() {
  const images = document.getElementsByName("image2");
  const image1 = window.getComputedStyle(images[0]).getPropertyValue("background");
  const image2 = window.getComputedStyle(images[1]).getPropertyValue("background");

  images[0].style.background = image2;
  images[1].style.background = image1;
}

function rightImage2() {
  const images = document.getElementsByName("image2");
  const image1 = window.getComputedStyle(images[0]).getPropertyValue("background");
  const image2 = window.getComputedStyle(images[1]).getPropertyValue("background");

  images[0].style.background = image2;
  images[1].style.background = image1;
}

function cerberus() {
  const light = document.getElementById("light");
  const dark = document.getElementById("dark");

  dark.style.display = "block";
  light.style.display = "none";
}

function flora() {
  console.log("i work")
  document.getElementById("dark").style.display = "none";
  document.getElementById("light").style.display = "block";
}