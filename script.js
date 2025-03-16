let elements = document.querySelectorAll(".elem");
let images = document.querySelectorAll("#image-container img");
let currentIdx = 0;

function showNext() {
  // Hide the current element and image
  elements[currentIdx].style.display = "none";
  images[currentIdx].style.display = "none";

  // Increment index and loop back when reaching the end
  currentIdx = (currentIdx + 1) % elements.length;

  // Show the next element and image
  elements[currentIdx].style.display = "flex";
  images[currentIdx].style.display = "block";
}

function showPrevious() {
  // Hide the current element and image
  elements[currentIdx].style.display = "none";
  images[currentIdx].style.display = "none";

  // Increment index and loop back when reaching the end
  currentIdx = (currentIdx - 1 + elements.length) % elements.length;

  // Show the next element and image
  elements[currentIdx].style.display = "flex";
  images[currentIdx].style.display = "block";
}

// Add event listener to each element's arrow icon
elements.forEach((elem, idx) => {
  let arrowRight = elem.querySelector("#right"); // Declare arrowIcon with let
  arrowRight.addEventListener("click", () => {
    showNext();
  });
});

elements.forEach((elem, idx) => {
  let arrowLeft = elem.querySelector("#left"); // Declare arrowIcon with let
  arrowLeft.addEventListener("click", () => {
    showPrevious();
  });
});

// Initialize: hide all elements and images except the first one
elements.forEach((elem, idx) => {
  if (idx != 0) {
    elem.style.display = "none";
  }
});

images.forEach((img, idx) => {
  if (idx != 0) {
    img.style.display = "none";
  }
});

//  <------------GSAP------------->

let tl = gsap.timeline();

tl.from(
  ".circle",
  {
    y: 50,
    duration: 0.7,
    stagger: 0.2,
    opacity: 0,
  },
  "a"
)
  .from(
    "#nav-part-2 h4",
    {
      y: 50,
      duration: 0.7,
      stagger: 0.2,
      opacity: 0,
    },
    "a"
  )
  .from(
    "#nav2 h3",
    {
      y: 50,
      duration: 0.7,
      stagger: 0.2,
      opacity: 0,
    },
    "a"
  )
  .from(
    ".elem h3",
    {
      y: 70,
      duration: 0.7,
      //   stagger: 0.2,
      opacity: 0,
      delay: 0.5,
    },
    "b"
  )
  .from(
    ".elem h4",
    {
      y: -70,
      duration: 0.7,
      //   stagger: 0.2,
      opacity: 0,
      delay: 0.5,
    },
    "b"
  )
  .from(
    ".elem h1",
    {
      scale: 0.2,
      duration: 0.7,
      opacity: 0,
    },
    "b"
  )
  .from(
    "#left",
    {
      x: 100,
      duration: 0.7,
      opacity: 0,
    },
    "b"
  )
  .from(
    "#right",
    {
      x: -100,
      duration: 0.7,
      opacity: 0,
    },
    "b"
  )
  .from(
    "#image-container img",
    {
      scale: 0,
      duration: 0.7,
      opacity: 0,
    },
    "b"
  );
