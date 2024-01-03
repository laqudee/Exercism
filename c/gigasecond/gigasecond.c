#include "gigasecond.h"

void gigasecond(time_t input, char *output, size_t size)
{
  time_t gigasecond = input + 1000000000;
  struct tm *timeinfo;
  timeinfo = gmtime(&gigasecond);
  strftime(output, size, "%Y-%m-%d %H:%M:%S", timeinfo);
}
