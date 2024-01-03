#include "space_age.h"

float age(planet_t planet, int64_t seconds)
{
  if ((int)planet < 0) return -1;
  float earth_seconds_per_year = 365.25 * 24 * 60 * 60;
  float orbital = 1.0;
  switch (planet) {
    case EARTH:
      break;
    case MERCURY:
      orbital = 0.2408467;
      break;
    case VENUS:
      orbital = 0.61519726;
      break;
    case MARS: 
      orbital = 1.8808158;
      break;
    case JUPITER:
      orbital = 11.862615;
      break;
    case SATURN:
      orbital = 29.447498;
      break;
    case URANUS:
      orbital = 84.016846;
      break;
    case NEPTUNE:
      orbital = 164.79132;
      break;
  }
  return (float)seconds / earth_seconds_per_year / orbital;
}
