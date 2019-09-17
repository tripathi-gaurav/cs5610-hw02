var stack = [];
var val = "";
document.addEventListener('DOMContentLoaded', 
function(){
	

	var txt_result = document.getElementById('result');

	var click_zero = function(e){
		//alert("hello");
		var op = e.target.value;
		if( op != '/' && op != '*' && op != '+' && op != '*'){

		val += op;
		//stack.push(e.target.value);
		//txt_result.value += e.target.value;		
		//console.log(e.target.value);
		console.log(val);
		}else{
			var operand_one = parseFloat(val);
		
			if(stack.length == 2){
				var operator = stack.pop();
				var operand_two = stack.pop();
				var result = 0;
				if( operator == '+'){
					result = operand_one + operand_two;
				}else if( operator == '-'){
					result = operand_one - operand_two;
				}
				stack.push( result );
				val = result;	
			}else{
				stack.push( operand_one );
				stack.push( op );
			}
			console.log(stack);
		}
	}
	document.querySelectorAll("button").forEach(function(elem){

		elem.addEventListener("click", click_zero);
	});

}, false);
