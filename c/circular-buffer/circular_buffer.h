#ifndef CIRCULAR_BUFFER_H
#define CIRCULAR_BUFFER_H

#include <stdint.h>
#include <stddef.h>

typedef int16_t buffer_value_t;

typedef struct circular_buffer_t circular_buffer_t;

circular_buffer_t *new_circular_buffer(size_t capacity);

void delete_buffer(circular_buffer_t *buffer);

void clear_buffer(circular_buffer_t *buffer);

int16_t write(circular_buffer_t *buffer, buffer_value_t value);

int16_t overwrite(circular_buffer_t *buffer, buffer_value_t value);

int16_t read(circular_buffer_t *buffer, buffer_value_t *value);

#endif
