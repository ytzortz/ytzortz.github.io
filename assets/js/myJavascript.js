
var lastScrollTime = Date.now();
var secondsSinceLastScroll = 0;
var timerId;

var clickCounter = document.getElementById('clickSpan');
var clickCount = 0;


var pageCount = localStorage.getItem('pageCount');

// If the page count doesn't exist in local storage, set it to 0
if (pageCount === null) {
  pageCount = 0;
}

pageCount++;

document.getElementById('pageCount').textContent = pageCount;
localStorage.setItem('pageCount', pageCount);


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    document.getElementById('pixelsCounter').textContent = Math.round(scrollPosition);

    lastScrollTime = Date.now();

  clearInterval(timerId);
  secondsSinceLastScroll = 0;
  timerId = setInterval(updateSecondsCounter, 1000); // Restart the timer

  clearInterval(timerId);
  secondsSinceLastScroll = 0;
  });

  setInterval(function() {
    var currentTime = Date.now();
    var secondsSinceLastScroll = (currentTime - lastScrollTime) / 1000; // Convert milliseconds to seconds
    document.getElementById('secondsCounter').textContent = Math.round(secondsSinceLastScroll);
  }, 1000);


  function updateSecondsCounter() {
    secondsSinceLastScroll++;
    document.getElementById('secondsCounter').textContent = secondsSinceLastScroll;
  }


clickCounter.addEventListener('click', function(){
  clickCount++;
  document.getElementById('clickCounter').textContent = clickCount;
});
