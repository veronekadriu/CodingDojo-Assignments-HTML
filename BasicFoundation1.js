//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255
function numbers(){
     var arr=[];
     for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr;
}

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sum_even(){
    var sum=0;
    for(var i=0; i<=1000; i++){
        if(i%2 === 0){
            sum += i;
        }
    }
    return sum;
}

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sum_odd(){
    var sum =0;
    for(var i=0; i<=5000; i++){
        if(i%2 === 1){
            sum += i;
        }
    }
    return sum;
}

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterateAnArray(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
     return sum;   
}

// var result = iterateAnArray([-5,2,5,12]);
// console.log(result);

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maximum(arr){
    var max= arr[0];
    for(var i=0; i<arr.length; i++){
        if(max<arr[i]){
            max= arr[i];
        }
    }
    return max;
}

// var result = maximum([-3,3,5,7]);
// console.log(result);

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function average(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

// var result = average([1,3,5,7,20]);
// console.log(result);

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArray(){
    var arr=[];
    for(var i=1; i<50; i++){
        if(i%2 !==0){
            arr.push(i);
        }
    }
    return arr;
}
// var result = oddArray([1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
//     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
//     30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
//     40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
//     50]);
// console.log(result);


//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7)

function greaterthanY (x,y) {
    var count=0;
    for(var i=0; i<x.length; i++){

        if(x[i]>y){
            count++;
        }
    }

    console.log(count);
   
}

// greaterthanY([0,1,2,3,4,5], 1);

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

// var result = squares([1,5,10,-2]);
// console.log(result);

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function resetNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

// var result = resetNegatives([1,5,10,-2]);
// console.log(result); 

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function num (arr){
    var maximum = arr[0];
    var minimum= arr[0];
    var sum= arr[0];
    for( var i=0 ;i < arr.length; i++){
        sum = sum + arr[i];
        if(arr[i]> maximum){
            maximum = arr[i];
        }
        else if(arr[i]<minimum){
            minimum= arr[i];
        } 

    }
    console.log("Maximum: ",maximum, "Minimum: ", minimum, "Average: ",  sum/arr.length);
}
num([1,5,10,-2]);

//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function returnReversed(arr){
    for(var i = 0; i<(arr.length/2); i++){
      var y = arr[i];
      arr[i] = arr[arr.length-(1+i)];
      arr[arr.length-(1+i)] = y;
    }
    return arr;
}
// var result = returnReversed([1,5,10,-2]);
// console.log(result);

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function replace(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

// var result = replace([-1,-3,2]);
// console.log(result); 
