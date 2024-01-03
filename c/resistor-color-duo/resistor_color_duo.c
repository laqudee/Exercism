#include "resistor_color_duo.h"

int color_code(resistor_band_t * array) {
  return (int)array[0] * 10 + (int)array[1]
}
