

var itemdata=[
{category:"fruit",itemName: "apples",onSale:true},
{category:"canned",itemName: "beans",onSale:false},
{category:"fruit",itemName: "melon",onSale:true},
{category:"fruit",itemName: "apples",onSale:false}

]

//console.log(itemdata)




function organizeItems(arr){
let sort_object={}

   for (let item of arr) {
    
    if(!(item.category in sort_object)){
      sort_object[item.category]=[]
      if (item.onSale){
        sort_object[item.category].push(item.itemName +"($)")
      }
      else{
         sort_object[item.category].push(item.itemName)



}
    }
else{

    if (item.onSale){
        sort_object[item.category].push(item.itemName + '($)')
      }
else{
  sort_object[item.category].push(item.itemName)



}



}


}

return sort_object

}

   





console.log(organizeItems(itemdata))