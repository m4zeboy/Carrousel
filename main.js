let selected = document.querySelector(".slide[data-selected=true]")
const slides = Array.from(document.querySelectorAll(".slide"));
const slidesIndexes = [0,1,2];

function prev() {
  let prevIndex = Number(selected.dataset.index) - 1;
  if(selected.dataset.index == 0) {
    prevIndex = 2
  }
  selected.classList.remove("active");
  selected.setAttribute("data-selected", "false");
  selected = slides.find(slide => slide.dataset.index == prevIndex)
  selected.classList.add("active");
  selected.setAttribute("aria-selected", "true");
}

function next() {
  let nextIndex = Number(selected.dataset.index) + 1
  if(selected.dataset.index == slides.length - 1) {
    nextIndex = 0;
  }
  selected.classList.remove("active");
  selected.setAttribute("data-selected", "false");
  selected = slides.find(slide => slide.dataset.index == nextIndex)
  selected.classList.add("active");
  selected.setAttribute("aria-selected", "true");
}