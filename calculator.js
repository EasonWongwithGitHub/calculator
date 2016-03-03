window.onload= function(){
	var num =0;
	var result=0;
	var number="0";
	var state=0;
	var operate=0;
	var quit=0;
	var text =document.getElementById('text');
    var num1 =document.getElementById('num1');
    var num2 =document.getElementById('num2');
    var num3 =document.getElementById('num3');
    var num4 =document.getElementById('num4');
    var num5 =document.getElementById('num5');
    var num6 =document.getElementById('num6');
    var num7 =document.getElementById('num7');
    var num8 =document.getElementById('num8');
    var num9 =document.getElementById('num9');
    var num0 =document.getElementById('num0');
    var point =document.getElementById('point');
	var ac =document.getElementById('ac'); 
	var jj =document.getElementById('opera+-');  	 
	var plus =document.getElementById('opera+');
	var subtract =document.getElementById('opera-');
	var multiply =document.getElementById('opera*');
	var divide =document.getElementById('opera/');
	var equal =document.getElementById('opera=');	  

    function command(num){
		if(text.value=='0'||operate==1){
			text.value=String(num);
		}else{
			text.value+=String(num);
		}
		operate=0;
        quit=0;

	}

    num1.onclick=function(){command(1)};
    num2.onclick=function(){command(2)};
    num3.onclick=function(){command(3)};
    num4.onclick=function(){command(4)};
    num5.onclick=function(){command(5)};
    num6.onclick=function(){command(6)};
    num7.onclick=function(){command(7)};
    num8.onclick=function(){command(8)};
    num9.onclick=function(){command(9)};
    num0.onclick=function(){command(0)};

	plus.onclick=function(){
		calculate();
		state=1;
		operate=1;
	}

	subtract.onclick=function(){
		calculate();
		state=2;
		operate=1;
	}

	multiply.onclick=function(){
		calculate();
		state=3;
		operate=1;
	}

	divide.onclick=function(){
		calculate();
		state=4;
		operate=1;
	}		

	equal.onclick=function(){
		calculate();
		operate=1;
		num=0;
		result=0;
		number="0";
	}		
    
	function calculate(){
		number=Number(text.value);
		if(num!=0&&quit!=1){
			switch(state){
			    case 1: 
			        result=num+number;break;
			    case 2: 
			        result=num-number;break;
			    case 3: 
			        result=num*number;break;
			    case 4: 
			        result=num/number;break;            
			}
		}else{
			result=number;
		}
		quit=1;
        text.value=String(result);
        num=result;
	}

	ac.onclick=function(){
		num=0;
		number="0";
		result=0;
		text.value=0;
	}

    jj.onclick=function(){
    	number=0-Number(text.value);
    	text.value=String(number); 
    }

    percent.onclick=function(){
    	number=0.01*Number(text.value);
    	text.value=String(number); 
    }

    point.onclick=function(){
    	if(text.value=='0'||operate==1){
    		text.value='0';
    	}
    	for(i=0; i<=text.value.length;i++){ //判断是否已经有一个点号
    		if(text.value.substr(i,1)==".") return false; //如果有则不再插入
        }
        text.value=text.value+ ".";
        operate=0;
    } 

}

