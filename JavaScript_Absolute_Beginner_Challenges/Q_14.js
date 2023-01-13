//* Q14. Check if a user is logged in OR subscribed?

//* Create a function that takes in two strings. if the first string is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

//*********Solution********

const isLoggedInAndSubscribed = (str1, str2) =>
   str1 === "LOGGED_IN" || str2 === "SUBSCRIBED";
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
