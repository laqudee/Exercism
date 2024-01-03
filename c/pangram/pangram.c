#include "pangram.h"

bool is_pangram(const char *sentence)
{
  if (sentence == NULL || strlen(sentence) == 0) {
    return false;
  }
  size_t letter_array[26];
  memset(letter_array, 0, sizeof(letter_array));
  for(size_t i = 0; i < strlen(sentence); i++) {
    char c = tolower(sentence[i]);
    if(c >= 'a' && c <= 'z') {
      letter_array[c - 'a'] = 1;
    }
  }
  for(size_t i = 0; i < 26; i++) {
    if(letter_array[i] != 1) {
      return false;
    }
  }

  return true;
}
