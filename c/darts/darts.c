#include "darts.h"

int score(coordinate_t coordinate) {
  float distance = sqrt(coordinate.x * coordinate.x + coordinate.y * coordinate.y);

  if (distance > 10.0) {
    return 0;
  } else if (distance > 5.0) {
    return 1;
  } else if (distance > 1.0) {
    return 5;
  } else {
    return 10;
  }
}
