/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const newArray = students.map((student) => {
    const studentGrade = newGrades
      .filter((element) => element.studentId === student.id)
      .map((x) => x.grade)[0];
    student['grade'] = studentGrade || 'N/A';
    return student;
  });
  return newArray.filter((element) => element.location === city);
}


