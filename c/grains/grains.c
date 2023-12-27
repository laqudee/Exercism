#include "grains.h"

uint64_t square(uint8_t index)
{
  return (uint64_t)1 << (index - 1);
}

uint64_t total(void)
{
  return (uint64_t)pow(2, 64)
}
