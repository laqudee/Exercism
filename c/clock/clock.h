#ifndef CLOCK_H
#define CLOCK_H

#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

#define MAX_STR_LEN sizeof("##:##\n")

typedef struct {
   char text[MAX_STR_LEN];
} clock_t;

clock_t clock_create(int hour, int minute);
clock_t clock_add(clock_t clock, int minute_add);
clock_t clock_subtract(clock_t clock, int minute_subtract);
bool clock_is_equal(clock_t a, clock_t b);

int positive_mod(int n, int d);

#endif
