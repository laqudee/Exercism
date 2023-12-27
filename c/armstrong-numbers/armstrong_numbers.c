#include "armstrong_numbers.h"
#include <math.h>

bool is_armstrong_number(int candidate)
{
  int originalNumber = candidate;
  int n = 0;
  int result = 0;

  while(originalNumber != 0){
    originalNumber /= 10;
    ++n;
  }

  originalNumber = candidate;
  while(originalNumber != 0) {
    int remainder = originalNumber % 10;
    result += pow(remainder, n);
    originalNumber /= 10;
  }

  return result == candidate;
}
