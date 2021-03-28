const barArray = [];
const max_size = 1000;
let size = 60;

$(".btn-array").click(randomize);
$("#arr_size").on("input", addBars);

$("body").ready(function() {

    const bars = $("#bars");

    for(var i = 0; i<max_size; i++) {
        const bar = document.createElement("div");

        $(bar).addClass("bar").css("height", "0px");
        
        barArray.push(bar);
    }
    
    animateOnLoad();
    addBars();
    setTimeout(() => randomize(), 600); 
});

function animateOnLoad() {
    $(".no-effect").not(".after").addClass("add-effect").removeClass("no-effect");
    
    setTimeout(function() {
        $(".style-card.no-effect").addClass("add-effect").removeClass("no-effect");
        $(".fab").addClass("add-effect").removeClass("no-effect");
    }, 600);

}

function getRandom() {
    return Math.floor(Math.random()*100) + 1;
}

function randomize() {
    barArray.forEach(function(bar) {
        const num = getRandom();
        $(bar).css("height", num*4+ "px");
    });
}

function addBars() {
    size = $("#arr_size").val();
    
    $("#bar-size").text(size);

    const bars = $("#bars");
    bars.empty();

    for(var i=0; i<size; i++) {
        const bar = barArray[i];
        bars.append(bar);
    }
}

function updateSpeed() {
    // const speed = document.querySelector("#sort_speed").value;
    // const speedText = document.getElementById("speedText");
    // speedText.innerHTML = speed;
}

// Code for Bar Style

$('input[name="radio"]').click(function(e) {
    switch (e.target.id) {
        case 'one':
            $(this).not("normal-style").addClass("normal-style").removeClass("compact-style");
            break;
        case 'two':
            $(this).not("compact-style").addClass("compact-style").removeClass("normal-style");
            break;
        default:
            console.log("Unknown error occurred in radio card");
    }
});

$('input[name="radio"]:checked').val();

// toggle the switch animation

$('.toggle').click(function(e){
    $(this).toggleClass('toggle-on');
});