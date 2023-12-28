#include "grade_school.h"

void init_roster(roster_t * roster) {
  roster->count = 0;
}

bool add_student(roster_t *roster, const char *name, uint8_t grade) {
  if (roster->count >= MAX_STUDENTS) {
    return false;
  }
  if (strlen(name) >= MAX_NAME_LENGTH) {
    return false;
  }

  student_t new_student;
  new_student.grade = grade;
  strcpy(new_student.name, name);

  for(size_t i=0; i < roster->count; i++) {
    if (strcmp(roster->students[i].name, name) == 0) {
      return false;
    }
  }

  roster->students[roster->count++] = new_student;
  qsort(roster->students, roster->count, sizeof(student_t), compare_students);
  return true;
}

int compare_students(const void *a, const void *b) {
  student_t *student_a = (student_t *)a;
  student_t *student_b = (student_t *)b;
  if (student_a->grade != student_b->grade) {
    return (int)(student_a->grade - student_b->grade);
  } else {
    return strcmp(student_a->name, student_b->name);
  }
}

roster_t get_grade(const roster_t *roster, uint8_t grade) {
  roster_t result;
  result.count = 0;
  for(size_t i = 0; i < roster->count; i++) {
    if (roster->students[i].grade == grade) {
      result.students[result.count++] = roster->students[i];
    }
  }
  return result;
}
