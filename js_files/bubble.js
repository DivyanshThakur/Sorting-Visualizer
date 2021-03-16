function swap(el1,el2)
    {
      const style1 = window.getComputedStyle(el1.children[1]);
      const style2 = window.getComputedStyle(el2.children[1]);
 
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
        
      const height1 = el1.children[0].textContent;
      const height2 = el2.children[0].textContent;

        el1.children[1].style.height = transform2;
        el2.children[1].style.height = transform1;
        el1.children[0].textContent = height2;
        el2.children[0].textContent = height1;
    }

async function bubbleSort() {
    const arr = document.getElementById("bars").children;
    const speed = document.getElementById("sort_speed").value;

    var i, j, n = arr.length; 
   let swapped = false; 
   for (i = 0; i < n; i++) 
   { 
     swapped = false; 
     for (j = 0; j < n-i-1; j++) 
     {
        arr[j].classList.add("selectedL");
        arr[j+1].classList.add("selectedR");

        await new Promise(resolve => setTimeout(() => resolve(), speed));

        if (parseInt(arr[j].children[0].textContent) > parseInt(arr[j+1].children[0].textContent)) 
        { 
           swap(arr[j], arr[j+1]); 
           swapped = true; 
        } 

        await new Promise(resolve => setTimeout(() => resolve(), speed));


        arr[j].classList.remove("selectedL");
        arr[j+1].classList.remove("selectedR");
        arr[j].classList.add("animateDown");
        arr[j+1].classList.add("animateDown");

        await new Promise(resolve => setTimeout(() => resolve(), speed));

        arr[j].classList.remove("animateDown");
        arr[j+1].classList.remove("animateDown");
        await new Promise(resolve => setTimeout(() => resolve(), speed));

     }
     
    arr[n-i-1].children[1].style.background="green";
   } 
}