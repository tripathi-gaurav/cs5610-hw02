var stack = [];
var val = "";
document.addEventListener('DOMContentLoaded', 
function(){
	

	var txt_result = document.getElementById('result');
	txt_result.value = "";
	var click_zero = function(e){
		//alert("hello");
		var op = e.target.value;
		if( op == 'C'){
			val = "";
			stack = [];
			txt_result.value = val;
		}else if(  op != '/' && op != '*' && op != '+' && op != '-'){

			val += op;
			txt_result.value += op;
			console.log("www"  + val);
		}else{
			
		
			if(stack.length == 2){
				//var top_of_stack = stack[stack.length-1];
				//if( top_of_stack != op && op != '+' ){
					//stack[stack.length-1] = op;
				//}else{

				
				var operand_one = parseFloat(val);
				var operator = stack.pop();
				var operand_two = stack.pop();
				var result = 0;
				console.log( operand_one );
					console.log( operator );
					console.log( operand_two );
				if( operator == '+'){
					result = operand_one + operand_two;
				}else if( operator == '-'){
					result = operand_two - operand_one;
				}else if( operator == "*"){
					result = operand_one * operand_two;
				}else if( operator == '/'){
					result = operand_two / operand_one;
				}
					stack = [];
					val = result;	
					//txt_result.value = val;
					stack.push(result);
					stack.push( op );
					txt_result.value = stack[0] + "" + stack[1];
					val = "";
				//}
			}else{
				//if( stack.length > 0 ){	
					var operand_one = parseFloat(val);
					
                                	stack.push( operand_one );
					stack.push( op );
					txt_result.value += op;
					val = "";
				//}
				
			}
			console.log(stack);
		}
	}
	//binding all elements using a for loop
	//borrowed logic from: https://www.reddit.com/r/learnjavascript/comments/5j5quz/add_eventlistener_to_all_buttons_of_class/
	document.querySelectorAll("button").forEach(function(elem){

		elem.addEventListener("click", click_zero);
	});

}, false);

