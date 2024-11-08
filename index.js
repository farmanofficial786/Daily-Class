    //       DAILY CLass


// Question - Given an array , find out the total no. of odd and even nos.............

// let arr = [1, 2, 5, 7, 8, 3, 9, 1, 3, 4, 5];
// let totalEven = 0;
// let totalOdd = 0;
// for(let i = 1; i <= arr.length; i++){
//     if(arr[i] % 2 == 0){
//         totalEven++;
//     }else{
//         totalOdd++;
//     }
// }

// console.log("Total no. of even Numbers are :", totalEven);
// console.log("Total no. of Odd Numbers are :", totalOdd);



// While loop .....................................................................

// let i = 1;
// while(i < 10){
//     text = "The number is : " + i;
//     i++;
//     console.log(text);
// }



// Do-while loop ...................................................................

// let i = 1;
// do{
//     console.log("Hello farman");
//     i++;
// }while(i < 10);



// Strings Methods ..........................................................................
// indexof()  or    lastindexof()

// var name = "You will be an amazing developer";
// let index = name.indexOf("developer");
// console.log(index);
// index = name.lastIndexOf("developer");
// console.log(index);
// index = name.indexOf("developer", 80);                // -1
// console.log(index);



// * Methods of String      ........................................................
// The concat() method is used to join two or more strings. 

// var string1 = "Java";
// var string2 = "Script";
// // var string3 = String1 + string2;            // First way..
// var string3 = string1.concat(string2)       //Second way...
// console.log(string3);



// slice() Method - The slice() method removes the parts of a string and returns the extracted parts to a new string.........

// var name = "You will be an amazing developer";
// var newMessage = name.slice(7, 13);
// console.log(newMessage);
// newMessage = name.slice(7, -13);
// console.log(newMessage);
// newMessage = name.slice(7);
// console.log(newMessage);
// newMessage = name.slice(-7);
// console.log(newMessage);



// (iv). Substring() Method - Substring does not support negative index for substring, second parameter is length............

// var name = "You will be an amazing developer";
// var newMessage = name.substring(7, 13);
// console.log(newMessage);
// var newMessage = name.substring(7);
// console.log(newMessage);
