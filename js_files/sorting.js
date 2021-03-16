function addBars() {
    const size = document.querySelector("#arr_sz").value;
    const barText = document.getElementById("barText");
    barText.innerHTML = size;

    let arr = [];
    const bars = document.getElementById("bars");

    while (bars.hasChildNodes()) {  
        bars.removeChild(bars.firstChild);
      }

    for(var i=0; i<size; i++)
        arr.push(Math.floor(Math.random()*100) + 1);

    arr.forEach((num) => {
        const bar = document.createElement("div");
        const val = document.createElement("div");
        const cylinder = document.createElement("div");
        
        bar.classList.add("bar");
        cylinder.classList.add("cylinder");
        cylinder.style.height = num*5+"px";
        val.innerHTML = num;
        val.classList.add("val");
        if(size > 60) {
            val.style.transform = "rotate(-90deg)";
        }
        bar.appendChild(val);
        bar.appendChild(cylinder);
        bars.appendChild(bar);
    });
}

function updateSpeed() {
    const speed = document.querySelector("#sort_speed").value;
    const speedText = document.getElementById("speedText");
    speedText.innerHTML = speed;
}