#include <stdio.h>

int binarySearch(int arr[], int left, int right, int target) {
    while (left <= right) {
        int mid = left + (right - left) / 2;

        // Check if the middle element is the target
        if (arr[mid] == target) {
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

int main() {
    int sortedArray[] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    int targetValue = 12;
    int arraySize = sizeof(sortedArray) / sizeof(sortedArray[0]);

    int resultIndex = binarySearch(sortedArray, 0, arraySize - 1, targetValue);

    if (resultIndex != -1) {
        printf("Element found at index %d\n", resultIndex);
    } else {
        printf("Element not found in the array\n");
    }

    return 0;
}
