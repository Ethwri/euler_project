var first = 1;
var second = 2;
var result = 2;
var sum = 0;
while (sum <= 4000000){
 sum = first + second;
 first = second;
 second = sum;
 
 if (sum % 2 === 0) {
 	result = result + sum
 }

}

console.log(result)
