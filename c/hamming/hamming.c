#include "hamming.h"

int compute(const char *lhs, const char *rhs)
{
  int l_len = strlen(lhs);
  int r_len = strlen(rhs);

  if (l_len != r_len) return -1;

  int i = 0;
  int result = 0;
  while(i<l_len) {
    if (lhs[i] != rhs[i]) {
      result++;
    }
    i++;
  }

  return result;
}
