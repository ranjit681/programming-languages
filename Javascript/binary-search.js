function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
      return mid;
    }
    // If the target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // If the target is smaller, ignore right half
      right = mid - 1;
    }
  }