async function bubbleSort() {
  const arr = document.getElementById("bars").children;
  const speed = document.getElementById("sort_speed").value;

  let i,
    j,
    swapped = false,
    n = arr.length;

  for (i = 0; i < n; i++) {
    swapped = false;

    for (j = 0; j < n - i - 1; j++) {
      if (!isPlaying) {
        return await reset();
      }

      const a = arr[j];
      const b = arr[j + 1];

      a.classList.add("selectedL");
      b.classList.add("selectedR");

      await new Promise((resolve) => setTimeout(() => resolve(), speed));

      if (getNum(a.style.height) > getNum(b.style.height)) {
        swapped = true;
        swap(a, b);
      }

      await new Promise((resolve) => setTimeout(() => resolve(), speed));

      a.classList.remove("selectedL");
      b.classList.remove("selectedR");
      // a.classList.add("animateDown");
      // b.classList.add("animateDown");

      await new Promise((resolve) => setTimeout(() => resolve(), speed));

      // a.classList.remove("animateDown");
      // b.classList.remove("animateDown");
      // await new Promise((resolve) => setTimeout(() => resolve(), speed));
    }

    if (!swapped) break;

    arr[n - i - 1].classList.add("completed");
  }

  await reset();
}
