async function insertionSort() {
  const arr = document.getElementById("bars").children;
  const speed = document.getElementById("sort_speed").value;

  let i,
    j,
    n = arr.length;

  for (let k = 1; k < n; k++) {
    arr[k].classList.add("greyed");
  }

  for (i = 1; i < n; i++) {
    if (!isPlaying) {
      return await reset();
    }

    j = i - 1;

    arr[i].classList.remove("greyed");

    arr[i].classList.add("selectedR");
    await new Promise((resolve) => setTimeout(() => resolve(), speed));

    while (
      j >= 0 &&
      getNum(arr[j].style.height) > getNum(arr[j + 1].style.height)
    ) {
      if (!isPlaying) {
        return await reset();
      }

      arr[j].classList.add("selectedL");
      await new Promise((resolve) => setTimeout(() => resolve(), speed));

      swap(arr[j], arr[j + 1]);

      arr[j].classList.remove("selectedL");
      arr[j].classList.add("selectedR");
      arr[j + 1].classList.remove("selectedR");
      await new Promise((resolve) => setTimeout(() => resolve(), speed));

      j--;
    }

    arr[j + 1].classList.remove("selectedR");
  }

  return await reset(false);
}
