# organizeItems-test
We want you to write a function organizeItem ,that organizes items by category,the argument to the funtion is an array of item objects.Each item object has 3 properties ,category(string),ItemName (string) and onSale (Boolean)
Here is the example;
var itemdata=[
{category:"fruit",itemName: "apples",onSale:true},
{category:"canned",itemName: "beans",onSale:false},
{category:"fruit",itemName: "melon",onSale:true},
{category:"fruit",itemName: "apples",onSale:false}

]
The return values should be an object with categories properties .Each property value is an array of items that belong to that category.
example of return object based on the example above.
{ fruit: [ 'apples($)', 'melon($)', 'apples' ],
  canned: [ 'beans' ] }
 
 Note that items having onSale set to true have '($)' appended to their names.
