#include "isogram.h"

bool is_isogram(const char phrase[]) {
    if (phrase == NULL) {
        return false;
    }
    int letter_array[26] = {0};
    int i = 0;
    char ch = phrase[0];
    while (ch != '\0') {
        printf("%c, ", ch);
        if (isalpha(ch)) {
            int array_index = tolower(ch) - 'a';
            printf("%d, letter_array %d \n", array_index, letter_array[array_index]);
            if (letter_array[array_index]) {
                return false;
            }
            ++letter_array[array_index];
        }
        ch = phrase[++i];
    }
    return true;
}

int main(void) {
  int result = is_isogram("cffrefg");
  printf("%d \n", result);

  return 0;
}
