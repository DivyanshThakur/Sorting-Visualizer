const barArray = [];
const max_size = 1000;
let size = 60;
let selectedButton = null;
let isPlaying = false;

$(".btn-array").click(randomize);
$("#arr_size").on("input", addBars);

$("body").ready(function () {
  for (var i = 0; i < max_size; i++) {
    const bar = document.createElement("div");

    $(bar).addClass("bar").css("height", "0rem");

    barArray.push(bar);
  }

  animateOnLoad();
  addBars();
  setTimeout(() => randomize(), 600);
});

const playButton = document.querySelector(".button--play");

playButton.addEventListener("click", () => {
  if (!selectedButton || $(playButton).hasClass("btn-disabled")) return;

  if (!isPlaying) {
    $(".btn-sort, .btn-array, input[type='range']").attr("disabled", true);
    isPlaying = true;
    playButton.classList.add("button--active");

    switch ($(selectedButton)[0].id) {
      case "bubble":
        bubbleSort();
        break;

      case "selection":
        selectionSort();
        break;

      case "insertion":
        insertionSort();
        break;

      // case "merge":
      // mergeSort();
      // break;

      // case "quick":
      // quickSort();
      // break;

      case "heap":
        heapSort();
        break;

      default:
        alert("Coming Soon...");
        reset();
        break;
    }
  } else {
    isPlaying = false;
    playButton.classList.remove("button--active");
  }
});

function animateOnLoad() {
  $(".no-effect").not(".after").addClass("add-effect").removeClass("no-effect");

  setTimeout(function () {
    $(".style-card.no-effect").addClass("add-effect").removeClass("no-effect");
    $(".fab").addClass("add-effect").removeClass("no-effect");
  }, 0);
}

function getRandom() {
  return Math.floor(Math.random() * 90) + 10;
}

function randomize() {
  barArray.forEach(function (bar) {
    const num = getRandom();
    $(bar).css("height", `${num}%`).attr("name", `${num}%`);
  });
}

function addBars() {
  size = $("#arr_size").val();

  const bars = $("#bars");
  bars.empty();

  for (var i = 0; i < size; i++) {
    const bar = barArray[i];
    bars.append(bar);
  }
}

$(".btn-sort").click(function () {
  if (selectedButton === this) {
    $(selectedButton).removeClass("sort-selected");
    $(playButton).addClass("btn-disabled");
    selectedButton = null;
    return;
  }

  if (selectedButton) $(selectedButton).removeClass("sort-selected");
  selectedButton = this;
  $(this).addClass("sort-selected");
  $(playButton).removeClass("btn-disabled");
});

function swap(el1, el2) {
  const a = $(el1);
  const b = $(el2);
  const temp = a.attr("name");
  a.css("height", b.attr("name")).attr("name", b.attr("name"));
  b.css("height", temp).attr("name", temp);
}

function getNum(str) {
  return parseInt(str.match(/\d+/)[0]);
}

async function reset(resetColor = true) {
  $(playButton).addClass("btn-disabled");

  const arr = document.getElementById("bars").children;
  // await new Promise((resolve) => setTimeout(() => resolve(), 100));

  if (resetColor) {
    for (let i = 0; i < arr.length; i++) {
      const lst = arr[i].classList;
      let changed = false;

      if (lst.contains("selectedL")) {
        changed = true;
        lst.remove("selectedL");
      }

      if (lst.contains("selectedR")) {
        changed = true;
        lst.remove("selectedR");
      }

      if (lst.contains("selectedTemp")) {
        changed = true;
        lst.remove("selectedTemp");
      }

      if (lst.contains("completed")) {
        changed = true;
        lst.remove("completed");
      }

      if (lst.contains("greyed")) {
        changed = true;
        lst.remove("greyed");
      }

      if (changed) {
        await new Promise((resolve) => setTimeout(() => resolve(), 100));
      }
    }
  }

  playButton.classList.remove("button--active");
  isPlaying = false;

  $(".btn-sort, .btn-array, input[type='range']").attr("disabled", false);
  $(playButton).removeClass("btn-disabled");
}
