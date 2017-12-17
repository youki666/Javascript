// window.console.log('123');

// function test(p) {
// 	var a = 5; b = 12;
// 	return p>1?p<b?p>b:p=5:p=3;
// }
// document.write(test(9));

function vote(){
	var age,voteable;
	age = document.getElementById('age').value;
	voteable =(age>18)?'too young':'you are voteable';
    document.getElementById('test').innerHTML = voteable;
   // window.close();
}
for(var i = 0;i<10;i++){
	var x = '';
	if(i ==3){
		continue;
	}
	x=x+"该数字为 " + i;
	console.log(x);
}
  var x =123 * 2;
 
  document.getElementById('test1').innerHTML = x;