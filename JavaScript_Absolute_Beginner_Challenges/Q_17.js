//* Q17. Write a JavaScript program to get th current date.

//* Expected Output:

// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

//*********Solution********

const getFormatedDate = () => {
  const now = new Date();
  let d = now.getDate();
  let m = now.getMonth();
  let y = now.getFullYear();
  d = d <= 9 ? "0" + d : d;
  m = m <= 9 ? "0" + m : m;
  return `${m}-${d}-${y}, ${m}/${d}/${y}\n${d}-${m}-${y}, ${d}/${m}/${y}`;
};
console.log(getFormatedDate());
