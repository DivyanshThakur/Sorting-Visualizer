async function selectionSort() {
  const arr = document.getElementById("bars").children;
  const speed = document.getElementById("sort_speed").value;

  var i,
    j,
    min_idx,
    n = arr.length;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    const a = arr[i];

    a.classList.add("selectedL");
    arr[min_idx].classList.add("selectedR");

    for (j = i + 1; j < n; j++) {
      if (!isPlaying) {
        return await reset();
      }

      arr[j].classList.add("selectedTemp");
      await new Promise((resolve) => setTimeout(() => resolve(), speed));

      if (getNum(arr[j].style.height) < getNum(arr[min_idx].style.height)) {
        arr[min_idx].classList.remove("selectedR");
        // await new Promise((resolve) => setTimeout(() => resolve(), speed));

        min_idx = j;
        arr[min_idx].classList.add("selectedR");
        await new Promise((resolve) => setTimeout(() => resolve(), speed));
      }

      arr[j].classList.remove("selectedTemp");
      // await new Promise((resolve) => setTimeout(() => resolve(), speed));
    }

    const b = arr[min_idx];

    if (getNum(a.style.height) > getNum(b.style.height)) {
      swap(a, b);
    }

    await new Promise((resolve) => setTimeout(() => resolve(), speed));

    a.classList.remove("selectedL");
    b.classList.remove("selectedR");
    // a.classList.add("animateDown");
    // b.classList.add("animateDown");

    // await new Promise((resolve) => setTimeout(() => resolve(), speed));

    // a.classList.remove("animateDown");
    // b.classList.remove("animateDown");
    await new Promise((resolve) => setTimeout(() => resolve(), speed));
    arr[i].classList.add("completed");
  }

  arr[n - 1].classList.add("completed");
  await reset();
}
