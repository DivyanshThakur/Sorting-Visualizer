const barArray = [];
const max_size = 1000;
let size = 60;

$(".btn-array").click(randomize);
$("#arr_sz").on("input", addBars);

$("body").ready(function() {

    const bars = $("#bars");

    for(var i = 0; i<max_size; i++) {
        const barContainer = document.createElement("div");
        const val = document.createElement("div");
        const bar = document.createElement("div");

        const num = getRandom();

        $(bar).addClass("bar").css("height", num*5+ "px");
        $(val).addClass("val").text(num);
        $(barContainer).addClass("bar-container")
                       .append(bar)
                       .append(val);

        barArray.push(barContainer);
    }

    addBars();
});


function getRandom() {
    return Math.floor(Math.random()*100) + 1;
}

function randomize() {
    barArray.forEach(function(barContainer) {
        const num = getRandom();
        $(barContainer.children[0]).css("height", num*5+ "px");
        $(barContainer.children[1]).text(num);
    });
}

function addBars() {
    size = $("#arr_sz").val();
    
    $("#bar-size").text(size);

    const bars = $("#bars");
    bars.empty();

    for(var i=0; i<size; i++) {
        const barContainer = barArray[i];
        const val = $(barContainer.children[1]);
  
        if(size > 60) {
            val.css("visibility", "hidden");
        } else {
            val.css("visibility", "visible");
        }
        
        bars.append(barContainer);
    }
}

function updateSpeed() {
    const speed = document.querySelector("#sort_speed").value;
    const speedText = document.getElementById("speedText");
    speedText.innerHTML = speed;
}