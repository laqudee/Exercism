#include "clock.h"

clock_t clock_create(int hour, int minute)
{
  int total_minutes = positive_mod(hour * 60 + (minute), 24 * 60);

  if (total_minutes < 0) {
    total_minutes = total_minutes + 24 * 60;
  }
  int clock_hour = (int)floor(total_minutes / 60);
  int clock_minute = total_minutes % 60;
  clock_t clock;
  sprintf(clock.text, "%02d:%02d", clock_hour, clock_minute);

  return clock;
}

clock_t clock_add(clock_t clock, int minute_add)
{
  int hour;
  int minute;
  sscanf(clock.text, "%d:%d", &hour, &minute);
  minute += minute_add;
  return clock_create(hour, minute);
}

clock_t clock_subtract(clock_t clock, int minute_subtract)
{
  return clock_add(clock, -minute_subtract);
}

bool clock_is_equal(clock_t a, clock_t b)
{
  return strcmp(a.text, b.text) == 0;
}

int positive_mod(int n, int d)
{
  return (n % d + d) % d;
}
