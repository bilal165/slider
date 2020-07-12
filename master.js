// select slider images and convert it to array
var images = Array.from(document.querySelectorAll("img"));
// select the unordered list
var ul = document.querySelector("ul");
// get the slide number
var slideComment = document.querySelector("div.slide-number");
// define the list item
var listItem;
// get previous button 
var prev = document.querySelector("div.previous");
// get hte next slide button
var mynext = document.querySelector("div.next");
// the current slide vriable
var current = 1;

function checker() {

  if (current == 1) {

    prev.classList.add("disabled");
    mynext.classList.remove("disabled");
    
  } else if (current < 1) {
    
    prev.classList.add("disabled");
    mynext.classList.remove("disabled");
    current += 1;

  } else if (current >= images.length) {

    mynext.classList.add("disabled");
    prev.classList.remove("disabled");
    current = images.length;

  } else {

    mynext.classList.remove("disabled");
    prev.classList.remove("disabled");

  }

  // remove the active class from all the images;
  for (var i in images) {

    images[i].classList.remove("active");

  }

  // remove active class from the list items
  for (var j  in Array.from(ul.children)) {

    Array.from(ul.children)[j].classList.remove("active");

  }

  slideComment.textContent = "slide number #" + current + " from #" + images.length;
  Array.from(ul.children)[current - 1].classList.add("active");
  images[current - 1].classList.add("active");

}

for (var i = 0; i < images.length; i++) {

  listItem = document.createElement("li");
  listItem.textContent = i + 1;
  ul.appendChild(listItem);

}

for (var index in Array.from(ul.children)) {

  var increment = parseInt(index) + 1;
  Array.from(ul.children)[index].setAttribute("data-index", increment);

}

// put an event listener on all the pagination items
for (var b in Array.from(ul.children)) {

  Array.from(ul.children)[b].addEventListener("click", function() {

    current = this.dataset.index;
    checker();

  })

}

checker();


prev.addEventListener('click', previous);

mynext.addEventListener('click', next);

function previous() {

  current = parseInt(current) - 1;
  checker();

}

function next() {

  current = parseInt(current) + 1;
  checker();

}