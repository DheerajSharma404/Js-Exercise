//* Q47. Write a JavaScript program to check the total marks of a student invarious examinations, The Student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the studen will get A+ grade or false otherwise.

//*********Solution********

const exam_status = (marks, exam) => {
  if (exam) {
    return marks >= 90;
  }
  return marks >= 89 && marks <= 100;
};
console.log(exam_status("78", ""));
console.log(exam_status("89", "true"));
console.log(exam_status("99", "true"));
