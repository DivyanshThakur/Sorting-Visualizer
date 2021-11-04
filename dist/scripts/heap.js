// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
async function heapify(arr, n, i) {
  if (!isPlaying) {
    return await reset();
  }

  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && getNum(arr[l].style.height) > getNum(arr[largest].style.height))
    largest = l;

  // If right child is larger than largest so far
  if (r < n && getNum(arr[r].style.height) > getNum(arr[largest].style.height))
    largest = r;

  // If largest is not root
  if (largest != i) {
    await new Promise((resolve) => setTimeout(() => resolve(), speed));

    swap(arr[i], arr[largest]);
    await new Promise((resolve) => setTimeout(() => resolve(), speed));

    // var swap = arr[i];
    // arr[i] = arr[largest];
    // arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

async function heapSort() {
  const arr = document.getElementById("bars").children;
  const speed = document.getElementById("sort_speed").value;

  const n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    if (!isPlaying) {
      return await reset();
    }

    // Move current root to end
    await new Promise((resolve) => setTimeout(() => resolve(), speed));

    swap(arr[0], arr[i]);

    await new Promise((resolve) => setTimeout(() => resolve(), speed));

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  /*********** */

  // var i, j, min_idx;
  // // n = arr.length;

  // // One by one move boundary of unsorted subarray
  // for (i = 0; i < n - 1; i++) {
  //   // Find the minimum element in unsorted array
  //   min_idx = i;
  //   const a = arr[i];

  //   a.classList.add("selectedL");
  //   arr[min_idx].classList.add("selectedR");

  //   for (j = i + 1; j < n; j++) {
  //     if (!isPlaying) {
  //       return await reset();
  //     }

  //     arr[j].classList.add("selectedTemp");
  //     await new Promise((resolve) => setTimeout(() => resolve(), speed));

  //     if (getNum(arr[j].style.height) < getNum(arr[min_idx].style.height)) {
  //       arr[min_idx].classList.remove("selectedR");

  //       min_idx = j;
  //       arr[min_idx].classList.add("selectedR");
  //       await new Promise((resolve) => setTimeout(() => resolve(), speed));
  //     }

  //     arr[j].classList.remove("selectedTemp");
  //   }

  //   const b = arr[min_idx];

  //   if (getNum(a.style.height) > getNum(b.style.height)) {
  //     swap(a, b);
  //   }

  //   await new Promise((resolve) => setTimeout(() => resolve(), speed));

  //   a.classList.remove("selectedL");
  //   b.classList.remove("selectedR");
  //   await new Promise((resolve) => setTimeout(() => resolve(), speed));
  //   arr[i].classList.add("completed");
  // }

  // arr[n - 1].classList.add("completed");
  await reset();
}
