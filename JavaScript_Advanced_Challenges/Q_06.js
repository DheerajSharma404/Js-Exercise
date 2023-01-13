//* Q6. First ^ Incomplete Todos?

//* Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's  from the result.

//*********Solution********

const firstSixIncomplete = async (number) => {
   // fetching the todos.
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   // converting the response into actual data
   const data = await response.json();
   //filetering an sliceing to get the first six incompleter task
   const incompleteTask = data.filter((task) => !task.completed).slice(0, 6);
   // rturnin the incomplete task.
   return incompleteTask;
};
firstSixIncomplete(6).then((data) => console.log(data));
