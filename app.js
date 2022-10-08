//// Array Excercise////////
// ====>>>1. Write a ts program to read and print elements of array.
// var str:string[] = ["Ali","Awais","Uzair","Fahad"];
// console.log("Original Array:",str);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// ====>>>2. Write a ts program to print all negative elements in an array.
// var nums:number[] = [10,34,-67,222,-56,-99,19,58,-11];
// console.log("original array:",nums);
// for(var i =0;i<nums.length;i++){
//     if(nums[i] < 0){
//         console.log("Negative elements in  array are:",nums[i]);
//     }
// }
// ====>>>3. Write a ts program to find sum of all array elements.
// var arr:number[] = [12, 3, 4, 15];
// function sum(arr) { 
//     let sum = 0; 
//     for (let i = 0; i < arr.length; i++) 
//         sum += arr[i]; 
//     return sum; 
// } 
// console.log("Sum of given array is " + sum(arr));
// =====>>>4. Write a ts program to find maximum and minimum element in an array.
// var arr:number[] = [77,45,94,34,70,23,67,56,99,56,78,98,90];
// var max:number= arr[0];
// var min:number= arr[0];
// for(var i = 0; i<arr.length;i++){
//     if(arr[i] >= max){
//         max = arr[i];
//     }
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log("maximum element in an array IS:", + max);
// console.log("minimum element in an array IS:", + min);
// =====>>>>5. Write a ts program to find second largest element in an array.
// var arr:number[] = [12, 35, 34, 10, 1, 1];
// function print2largest(arr:number[],arr_size:number){
//     for(var i = arr_size - 2; i >= 0; i--){
//         if (arr[i] != arr[arr_size - 1]) {
//             console.log("The second largest element is ",arr[i]);
//             return;
//          }
//     }
// }
// console.log("second largest element in an array.",print2largest(arr,6));
///////////////////////////////
// var arr:number[] = [34,70,23,67,84,73,95,77,56];
// var largestNumber = (values:number[]) => {
//     var highest:number = 0;
//     for(var i=0; i < values.length; i++){
//         if( values[i] > highest){
//             highest = values[i]
//         }
//     }
//     return highest;
// }
// console.log( "largest element in an array IS",largestNumber(arr));
// ====>>>6. Write a ts program to count total number of even and odd elements in an array.
//  var arr:number[] = [34,70,23,67,84,73,95,77,56,67,98,76,34];
//     var even:number = 0;
//     var odd:number = 0;
//     for(var i=0;i<arr.length;i++){
//          if((arr[i] & 1) == 1){
//             odd++;
//         }
//         else{
//                even++;
//         }   
//     }
//     console.log("Number of odd elements = ",odd);
//     console.log("Number of even elements = ",even);
// =====>>>>7. Write a ts program to count total number of negative elements in an array.
//  var arr:number[] = [34,-70,23,-67,84,-73];
//  var negative:number = 0;
//      for(var i=0;i<arr.length;i++){
//           if((arr[i] < 0)){
//              negative++;
//          }
// }
// console.log("Number of negative elements = ",negative);
// ====>>>8. Write a ts program to copy all elements from an array to another array.
// var first:number[] = [1, 2, 3];
// var second:number[] = [4, 5];
// for (var i of second) {
//     first.push(i);
// }
// console.log("copy all elements",first);
// var userNumbers = [10,20,30,40,50]
// var userNumbers2 = [60,70,80,90,100]
// var concatArr = userNumbers.concat(userNumbers2)
// console.log("concatArr", concatArr);
// ====>>>9. Write a ts program to insert an element in an array.
// var arr:number[] = [];
// arr.push(5,-8,9,34,-4);
// console.log("Insert of element in array;",arr);
// ====?>>>>10. Write a ts program to delete an element from an array at specified position.
//   var arr:number[] = [34,-70,23,-67,84,-73];
//   arr.splice(1,1);
//   console.log("After delete array element:",arr);
// ===>>>>11. Write a ts program to count frequency of each element in an array.
// ===>>>12. Write a ts program to print all unique elements in the array.
// let a = [7,7,35,24,22,22,22,2,2,1,2,1];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log("all unique elements",unique);
// ====>>>13. Write a ts program to count total number of duplicate elements in an array.
// var arr:number[] = [1, 10, 20, 1, 25, 1, 10, 30, 25, 1];
// var count:number = 0;
// for(var i=0; i<arr.length; i++)
//     {
//         for(var j=i+1; j<arr.length; j++)
//         {
//             if(arr[i] == arr[j])
//             {
//                 count++;
//                 break;
//             }
//         }
//     }
//     console.log("Total number of duplicate elements found in array = ",count);
// ===>>>14. Write a ts program to delete all duplicate elements from an array.
// var arr:number[] = [1, 10, 20, 2,1, 25, 1, 10, 30, 25, 1];
// var unique = arr.filter((value,index) =>{
//     // console.log(value,index);
//     return arr.indexOf(value) === index;
// })
// console.log("delete all duplicate elements after NEW Array:",unique);
// ====>>>15. Write a ts program to merge two array to third array.
// var merge:any = (first:number[], second:number[]) => {
//     for(let i=0; i<second.length; i++) {
//       first.push(second[i]);
//     }
//     return first;
//   }
// console.log("merge OF two array:",merge([1,2,3], [4,5,6]));
// ANOTHER WAY TO MERGE AN ARRAY
// var arr1:number[] = [4,5,6,7,8];
// var arr2:number[] = [9,5,45,67,77]
// var mergeArr:number[] = arr1.concat(arr2);
// console.log("merge two array to third array:",mergeArr);
// ===>>>16. Write a ts program to find reverse of an array.
// var arr1:number[] = [4,5,6,7,8];
// console.log("Original Array",arr1);
// console.log("Array elements after reverse:",arr1.reverse());
// ===>>>17. Write a ts program to put even and odd elements of array in two separate array.
//  var arr:number[] = [34,70,23,67,84,73,95];
//     var  evenCount:number = 0;
//     var  oddCount:number = 0;
//     var even:number[] = [0];
//     var odd:number[] = [0];
//     for(var i=0;i<arr.length;i++){
//          if((arr[i] & 1)){
//             odd[oddCount] = arr[i];
//             oddCount++;
//         }
//         else{
//             even[evenCount] = arr[i];
//             evenCount++;
//         }   
//     }
//     console.log("Original Array:=",arr);
//     console.log(" odd array = ",oddCount,odd);
//     console.log("even array = ",evenCount,even);
// ====>>>18. Write a ts program to search an element in an array.
//  var arr:number[] = [34,70,23,67,84,73,95];
//  console.log("Element found at index" , arr.indexOf(67));
// ====>>>19. Write a ts program to sort array elements in ascending or descending order.
// var studentsScores: number[] = [60, 20, 50, 70, 80];
// var sortedScoresAscendung: number[] = studentsScores.sort((a, b) => a - b);
// console.log("Sorted array elements in Ascending order=:", sortedScoresAscendung);
// console.log( "Sorted array elements in Descending=:",sortedScoresAscendung.reverse() )
// ===>>>20. Write a ts program to sort even and odd elements of array separately.
//  var arr:number[] = [10,2,30,11,25,16,57,86,9];
//     var  evenCount:number = 0;
//     var  oddCount:number = 0;
//     var even:number[] = [0];
//     var odd:number[] = [0];
//     for(var i=0;i<arr.length;i++){
//          if((arr[i] & 1)){
//             odd[oddCount] = arr[i];
//             oddCount++;
//         }
//         else{
//             even[evenCount] = arr[i];
//             evenCount++;
//         }   
//     }
//     var sortedScoresAscendung: number[] = arr.sort((a, b) => a - b);
//     var oddWali: number[] = odd.sort((a, b) => a - b);
//     var evenWali: number[] = even.sort((a, b) => a - b);
//     console.log("Original Array:=",sortedScoresAscendung);
//     console.log(" odd array = ",oddWali);
//     console.log("even array = ",evenWali);
// ====>>>21. Write a ts program to left rotate an array.
