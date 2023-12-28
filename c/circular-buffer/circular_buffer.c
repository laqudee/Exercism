#include "circular_buffer.h"
#include <stdlib.h>
#include <stdbool.h>
#include <errno.h>

struct circular_buffer_t {
  buffer_value_t * buffer;
  size_t capacity;
  size_t head;
  size_t tail;
  bool full;
};

circular_buffer_t * new_circular_buffer(size_t capacity) {
  circular_buffer_t *buffer = (circular_buffer_t *)malloc(sizeof(circular_buffer_t));
  buffer->buffer = (buffer_value_t *)calloc(capacity, sizeof(buffer_value_t));
  buffer->capacity = capacity;
  buffer->head = 0;
  buffer->tail = 0;
  buffer->full = false;

  return buffer;
}

void delete_buffer(circular_buffer_t *buffer) {
  free(buffer->buffer);
  free(buffer);
}

void clear_buffer(circular_buffer_t *buffer) {
  buffer->head = 0;
  buffer->tail = 0;
  buffer->full = false;
}

int16_t write(circular_buffer_t *buffer, buffer_value_t value) {
  if (buffer->full) return EXIT_FAILURE;
  buffer->buffer[buffer->head] = value;
  buffer->head = (buffer->head + 1) % buffer->capacity;
  if (buffer->head == buffer->tail) buffer->full = true;
  errno = ENOBUFS;
  return EXIT_SUCCESS;
}

int16_t overwrite(circular_buffer_t *buffer, buffer_value_t value) {
  if (!buffer->full) {
    return write(buffer, value);
  }
  buffer->buffer[buffer->tail] = value;
  buffer->tail = (buffer->tail + 1) % buffer->capacity;
  if (buffer->full) {
    buffer->head = (buffer->head + 1) % buffer->capacity;
  } else if (buffer->head == buffer->tail) {
    buffer->full = true;
  }
  return EXIT_SUCCESS;
}

int16_t read(circular_buffer_t *buffer, buffer_value_t *value) {
  if (buffer->head == buffer->tail && !buffer->full) {
    errno = ENODATA;
    return EXIT_FAILURE;
  }
  *value = buffer->buffer[buffer->tail];
  buffer->tail = (buffer->tail + 1) % buffer->capacity;
  buffer->full = false;

  return EXIT_SUCCESS;
}
