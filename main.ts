/*Q18:
Seeing the World Think: of at least five places in the world you'd like to visit.
Store the locations in a array.Make sure the array is not in alphabetical order.
Print your array in its original order.
Print your array in alphabetical order without modifying the actual list.
Show that your array is still in its original order by printing it.
Print your array in reverse alphabetical order without changing the order of the original
list.
Show that your array is still in its original order by printing it again.
Reverse the order of your list.print the array to show that its order has changed.
Reverse the order of your list again.print the list to show it's back to its original
order.
Sort you array so it's stored in alphabetical order.Print the array to show that its order
has been changed.
Sort to change your array so it's stored in reverse alphabetical order.Print the list
to show that its order has changed.*/

let countries: string[]= ["Pakistan","China","America","Srilanka","Bangladesh"];
let original_Order: string[] = countries.slice()
console.log("Original Order" , [original_Order]);
console.log("Alphabetical Order [${countries.sort()}]");
console.log("Original Order" , [original_Order]);
console.log("Reverse Alphabetical Order [${countries reverse()}]");
console.log("Original Order" , [original_Order]);
console.log("Reverse Alphabetical Order [${countries.reverse().reverse()}]");
console.log("Reverse Alphabetical Order [${countries.reverse()sort()}]");

// Q20:
//Think of something you could store in a array. For example, you could make a list
//of mountains, rivers countries, cities, languages, anything else you'd like Write
//a program that creates a list containing these items

let languages: string[] = ["English","Urdu","Punjabi","Sindhi","Pashto"];
languages.forEach((list)=>
{
    console.log(list);
})

languages.map((a)=>
{
    console.log(a);
})