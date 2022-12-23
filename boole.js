// const arr=[1,2,undefined,NaN,null,false,true,"",'abc',3];
// console.log(arr.filter(Boolean));

//out put  1,2,true,abc,3//


const array=[1,2,undefined,NaN,null,false,true,"",'abc',3];
console.log(array.filter(!Boolean));

//not out put// 