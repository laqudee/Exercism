#include "resistor_color.h"

resistor_band_t colors_array[] = { COLORS };

int color_code(resistor_band_t color)
{
  return (int)color;
}

resistor_band_t* colors(void)
{
  return colors_array;
}
