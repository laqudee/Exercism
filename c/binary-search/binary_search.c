#include "binary_search.h"

const int *binary_search(int value, const int *arr, size_t length)
{
  if (length == 0) return NULL;
  if (value < arr[0] || value > arr[length-1]) return NULL;

  size_t low = 0;
  size_t high = length - 1;
  while(low <= high) {
    size_t mid = low + (high - low) / 2;
    if (arr[mid] == value) {
      return &arr[mid];
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return NULL;
}
