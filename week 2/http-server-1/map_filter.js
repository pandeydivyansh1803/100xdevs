// given an array, give me back a new array where everything 
// is multiplied by 2


// sol 1
// const array = [1,2,3,4,5];
// const new_array=[];
// array.forEach((ele,ind)=>{
//     new_array.push(ele*2);
// })

// new_array.forEach((ele)=>{
//     console.log(ele);
// })


// map takes 2 i/ps
// array and tranformation function as callback
// map then creates a new array by applying transformation
// function on each of the array elements 


// const array = [1,2,3,4,5];
// let new_array=array.map((i)=>{
//     return i*2;
// })
// console.log(new_array);


// given an input array , give back all
// the even values from it

// sol1
// const array = [1,2,3,4,5];
// const new_array=[];
// array.forEach((ele,ind)=>{
//     if(ele%2==0){
//         new_array.push(ele);
//     }
// })

// console.log(new_array)


// filter function takes 2 ips
// first is the array on which we need to filter values
// the filtering function which decides whether we need to include 
// a given element in new filtered array or not
// the filtering logic returns true if have to include the 
// given element in new_array otherwise returns false
// filter function gives a filtered array as an output
const array = [1,2,3,4,5];
const new_array = array.filter((ele)=>{
    if(ele%2==0){
        return true;
    }else{
        return false;
    }
})

console.log(new_array)