1. // 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

//  problem 2
function maxOfTwoNumbers(x, y, z) {
    if (x >= y) && (y >= x)
    return x; {
     else if (y >= z) && (z >= y)
        return y; {
    else if (x >= z) && (z >= x)
            return z;
        }
    }
    console.log(maxOfTwoNumbers)(x, y, z);
    // problem 3
    function isCharAVowel(p) {
        let result = p == "a" || p == "e" || p == "i" || p == "o" || p == "u";
        return result;
    }
    console.log(isCharAVowel(i));
    console.log(isCharAVowel(v));

    //problem 4 

    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    console.log(sumArray([5, 4, 2]));

    // problem 5

    function multiplyArray(arr) {
        let num = 1;
        for (let i = 0; i < arr.length; i++) {
            num = num * arr[i];
        }
        return num;
    }

    console.log(sumArray([2, 4, 5]));

    // problem 6

    let len = function (x, a, d) {
        return arguments.length;
    }
    console.log(len);

    // problem 7

    function reverseString(bro) {
        return bro.split("").reverse().join("");
    }
    console.log(reverseString("rockstar"));

    // problem 8

    let longest = function (arr = ["you", "four", "it"]) {
        let longestWord = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > longestWord) {
                longestWord = arr[i].length;
            }
        }
        return longestWord;
    }
    console.log(longest);

    // problem 9

    function stringsLongerThan(arr, len) {
        let words = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > len) {
                words.push(arr[i]);
            }
        }
        return words;
    }
    console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
}


