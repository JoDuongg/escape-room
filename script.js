function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";
  
  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      if (text.charAt(i) === '<') {
        // If the character is '<', skip until '>'
        i = text.indexOf('>', i);
      }
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 75;
var h1 = document.querySelector('h1');
var paragraph1 = document.querySelector('#paragraph1');
var paragraph2 = document.querySelector('#paragraph2');
var paragraph3 = document.querySelector('#paragraph3');
var delay = h1.innerHTML.length * speed + speed;

// type effect for header
typeEffect(h1, speed);

// type effect for body (paragraph1)
setTimeout(function(){
  paragraph1.style.display = "inline-block";
  typeEffect(paragraph1, speed);
}, delay);

// type effect for body (paragraph2)
setTimeout(function(){
  paragraph2.style.display = "inline-block";
  typeEffect(paragraph2, speed);
}, delay * 23); // Adjust delay as needed

// type effect for body (paragraph3)
setTimeout(function(){
  paragraph3.style.display = "inline-block";
  typeEffect(paragraph3, speed);
}, delay * 39); // Adjust delay as needed

document.getElementById('myButton').addEventListener('click', function() {
  // Replace 'another-page.html' with the path to your desired page
  window.location.href = "escapeRoom.html";
});