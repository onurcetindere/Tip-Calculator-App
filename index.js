let bill=document.querySelector('.interactive');
let percentage_items=document.querySelector('.tips');
let number_of_people=document.querySelector('select');
let tip_item=document.querySelector('#tip-amount');
let total_item=document.querySelector('#total');
percentage_items.addEventListener("click",function(e){
    var perc=e.target.getAttribute("value");

   
    var count=number_of_people.value;
    var total=bill.value/count;
    var tip=total*perc;
    total_item.innerText=Math.floor(total);
    tip_item.innerText=Math.floor(tip);
  

    console.log(count)
    console.log(total);
    console.log(perc)
    console.log(perc)
})
console.log("hello world")
