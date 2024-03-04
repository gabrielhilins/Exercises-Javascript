// Questao 1

function is_array(input) {
    return Array.isArray(input);
}
console.log('Questao 1:')
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log("");

// questao 2
function array_Clone(input) {
    return input.slice();
}
console.log('Questao 2:')
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log("");

// questao 3
function first(arr, n = 1) {
    if (n >= 0) {
        return arr.slice(0, n);
    } else {
        return [];
    }
}
console.log('Questao 3:')
console.log(first([7, 9, 0, -2]));    
console.log(first([], 3));                  
console.log(first([7, 9, 0, -2], 3));       
console.log(first([7, 9, 0, -2], 6));       
console.log(first([7, 9, 0, -2], -3));     
console.log(""); 


// questao 4
function last(arr) {
    return arr[arr.length - 1];
}
console.log('Questao 4:')
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log("");

// questao 5
const myColor =  ["Red", "Green", "White", "Black"];
const arr = myColor.join(", ")
const arr1 = myColor.join("+ ")
console.log('Questao 5:')
console.log(arr);
console.log(arr1);
console.log("");

// questao 6

// questao 7
const arr2 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const arrSortido = arr2.sort();
console.log('Questao 7:')
console.log(arrSortido);
console.log("")

// questao 8
function mostFrequent(array) {
    // Create an object to count the occurrences of each item
    var count = {};

    // Iterate over the array and count the occurrences of each item
    array.forEach(function(item) {
        count[item] = (count[item] || 0) + 1;
    });

    // Find the most frequent item and its count
    var mostFrequentItem;
    var maxCount = 0;
    for (var key in count) {
        if (count[key] > maxCount) {
            mostFrequentItem = key;
            maxCount = count[key];
        }
    }

    // Return the most frequent item and its count
    return mostFrequentItem + " ( " + maxCount + " times )";
}

// Sample array
var arr3 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Output the result
console.log(mostFrequent(arr3)); // Sample Output: a ( 5 times )
