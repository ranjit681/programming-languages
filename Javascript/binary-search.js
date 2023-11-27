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

  // If the target is not found
  return -1;
}

// Example usage:
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const targetValue = 12;
const resultIndex = binarySearch(sortedArray, targetValue);

if (resultIndex !== -1) {
  console.log(`Element found at index ${resultIndex}`);
} else {
  console.log("Element not found in the array");
}
