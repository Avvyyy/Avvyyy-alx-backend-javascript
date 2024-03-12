function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city) // Filter students by city
    .map(student => {
      // Map over each student to update the grade
      const studentGrade = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student, // Spread operator to copy student object
        grade: studentGrade ? studentGrade.grade : 'N/A', // Update grade if found, else 'N/A'
      };
    });
}

export default updateStudentGradeByCity;

