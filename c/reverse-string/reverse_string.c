#include "reverse_string.h"

char *reverse(const char *value)
{
  char *str = malloc(strlen(value) + 1);
  strcpy(str, value);
  int len = strlen(value);
  for(int i=0; i<len/2; i++) {
    char temp = str[i];
    str[i] = str[len - i - 1];
    str[len - i - 1] = temp;
  }

  return str;
}
