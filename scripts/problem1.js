var varNum = 0;
var sum = 0;

for (varNum = 0; varNum < 1000; varNum ++) {
	if(varNum % 3 === 0) {
		sum = sum + varNum;
	}
	
	else if (varNum % 5 ===0) {
		sum = sum + varNum;
	}
	
	else {
		
	}
	
	
}
console.log(sum);