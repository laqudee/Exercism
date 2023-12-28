#include "rational_numbers.h"

rational_t add(rational_t r1, rational_t r2) {
  rational_t result;
  result.numerator = r1.numerator * r2.denominator + r2.numerator * r1.denominator;
  result.denominator = r1.denominator * r2.denominator;
    rational_t res = reduce(result);
  return res;
}

rational_t subtract(rational_t r1, rational_t r2) {
    rational_t result;
    result.numerator = r1.numerator * r2.denominator - r2.numerator * r1.denominator;
    result.denominator = r1.denominator * r2.denominator;
    rational_t res = reduce(result);
  return res;
}

rational_t reduce(rational_t r) {
  int a = abs(r.numerator);
  int b = abs(r.denominator);
  while(b != 0) {
    int temp = b;
    b = a % b;
    a = temp;
  }
  rational_t result;
  result.numerator = r.numerator / a;
  result.denominator = r.denominator / a;

  if (result.denominator < 0) {
    result.numerator = 0 - result.numerator;
    result.denominator = 0 - result.denominator;
  }

  return result;
}

float exp_real(uint16_t x, rational_t r) {
  return pow(x, (float)r.numerator/r.denominator);
}

rational_t multiply(rational_t r1, rational_t r2) {
    rational_t result;
    result.numerator = r1.numerator * r2.numerator;
    result.denominator = r1.denominator * r2.denominator;
    rational_t res = reduce(result);
  return res;
}

rational_t divide(rational_t r1, rational_t r2) {
    rational_t result;
    result.numerator = r1.numerator * r2.denominator;
    result.denominator = r1.denominator * r2.numerator;
    rational_t res = reduce(result);
  return res;
} 

rational_t absolute(rational_t r) {
    rational_t result;
    result.numerator = abs(r.numerator);
    result.denominator = abs(r.denominator);
    rational_t res = reduce(result);
    return res;
}

rational_t exp_rational(rational_t r, int16_t n) {
  rational_t result;
  result.numerator = pow(r.numerator, abs(n));
  result.denominator = pow(r.denominator, abs(n));
  if (n < 0) {
    int temp = result.numerator;
    result.numerator = result.denominator;
    result.denominator = temp;
  }
  return reduce(result);
}
