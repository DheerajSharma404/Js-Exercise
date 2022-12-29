//* Q4. Promises

//* On Youtube Watch:
// Videos on the youtube about Promises and Async Await.

//* Find all the posts by a single user?

//* Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.

//*********Solution********

const postsByUser = async (userId) => {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await response.json();
   return data.filter((post) => post.userId === userId);
};
console.log(postsByUser(5).then((data) => console.log(data)));
