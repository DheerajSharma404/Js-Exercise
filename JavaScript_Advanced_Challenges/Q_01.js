//* Q1. Show rating?

//* Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

//*********Solution********

const showRating = (rating) => {
   // Intialise an empty sting
   let ratings = "";
   //loop through the rounded down rating
   for (let i = 0; i < Math.floor(rating); i++) {
      //add a star for every iteration
      ratings += "*";
      //if its not last iteration add a space
      if (i !== Math.floor(rating) - 1) {
         ratings += " ";
      }
   }
   //if the number is not an integer
   if (!Number.isInteger(rating)) {
      //add a full stop
      ratings += " .";
   }
   // return it
   return ratings;
};

console.log(showRating(3.5));
