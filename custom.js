// ============================== Swap the row of history =================================//
	
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
		
function rowSwap(swap1,swap2){
	var temp1 = new Array();
	var temp2 = new Array();
	table = document.getElementById("myTableData");
	var temp3;

	for(var i=1;i<=table.rows[0].cells.length;i++)
		{
			temp1[i]=table.rows[swap1].cells[i].innerHTML;
			temp2[i]=table.rows[swap2].cells[i].innerHTML;
			table.rows[swap1].cells[i].innerHTML=temp2[i];
			table.rows[swap2].cells[i].innerHTML=temp1[i];
			temp3 = table.rows[swap1].style.backgroundColor;
			table.rows[swap1].style.backgroundColor = table.rows[swap2].style.backgroundColor;
			table.rows[swap2].style.backgroundColor = temp3;
		}
}
		
		
function addTable() {
     
    var myTableDiv = document.getElementById("myDynamicTable");
				 
    var table = document.createElement('TABLE');
	table.border='1';
			   
	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);
				 
	for (var i=0; i<6; i++){
		  var tr = document.createElement('TR');
		  tableBody.appendChild(tr);		  
		}
	myTableDiv.appendChild(table);
			   
}
		

	flag = 1;

function addRow(a,b,operate,c) {
     
	var table = document.getElementById("myTableData");

	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
    var color="<tbody>"+"<tr>"+"<td>"+"<button class='red1' onclick='redColor(this)'>R</button> <button class='blue1' onclick='blueColor(this)'>B</button> <button class='green1' onclick='greenColor(this)'>G</button>"+"</td>"+"</tr>"+"</tbody>";
			   
	var tablerow1 = row.insertCell(0);
	var tablerow2 = row.insertCell(1);
	var tablerow3 = row.insertCell(2);
	var tablerow4 = row.insertCell(3);
	var tablerow5 = row.insertCell(4);
	var tablerow6 = row.insertCell(5);

	tablerow1.innerHTML= flag;
	tablerow2.innerHTML= a ;
	tablerow3.innerHTML= b ;
	tablerow4.innerHTML= operate;
	tablerow5.innerHTML= c;
	tablerow6.innerHTML= color;
	flag++;
			
}

// ======================== fixing background color =============================== //
		
function redColor(obj) {
	var aa = obj.parentNode.parentNode;
	aa.style.backgroundColor = "rgba(255, 0, 0,0.5)";
	aa.style.color = "#FFFFFF";
}
function greenColor(obj) {
    var aa = obj.parentNode.parentNode;
	aa.style.backgroundColor = "rgba(0,255,0,0.5)";
	aa.style.color = "#FFFFFF";
}
		
function blueColor(obj) {
	var aa = obj.parentNode.parentNode;
	aa.style.backgroundColor = "rgba(0,0,255,0.5)";
	aa.style.color = "#FFFFFF";
}
		

		
function addi(a,b) {
	var d;
	d=+a + +b;
	return d;
}
		
function sub(a,b) {
	var d;
	d = a - b;
	return d;
}
		
function mult(a,b){
	var d;
	d = a * b;
	return d;
}
		
function divi(a,b){
	var d;
	d = a / b;
    return d;
}
		
function hcf(a,b){
	var gcd;
			
	while (b != 0) {
		t = b;
		b = a % b;
		a = t;
}
 
	gcd = a;
	return gcd;
}
		
document.getElementById("but1").onclick = function()  {
	var c;var e;var operate;
	var a = document.getElementById("val1").value;
	var b = document.getElementById("val2").value;
		
	if(a=="" || b=="") {
		alert("Enter Some integer to get the result");
	}
		
	else {
		if(document.getElementById("add").checked) {
	        c = addi(a,b);
	        operate = "ADDITION";
	        addRow(a,b,operate,c);
	        document.getElementById("realtime").innerHTML = a + " " + "+" + " "  + b + " " + "=" + " " + c;
         }

        else {
	        if(document.getElementById("subtract").checked) {
		   	   c = sub(a,b);
			   operate = "SUBTRACTION";
			   addRow(a,b,operate,c);
			   document.getElementById("realtime").innerHTML = a + " " + "-" + " "  + b + " " + "=" + " " + c;			
	        }
			else {
				if(document.getElementById("multiply").checked) {
					c = mult(a,b);
					operate = "MULTIPLICATION";
					addRow(a,b,operate,c);
					document.getElementById("realtime").innerHTML = a + " " + "*" + " "  + b + " " + "=" + " " + c;
				}
				else {
					if(document.getElementById("divide").checked) {
						 c = divi(a,b);
						 operate = "DIVISION";
						 addRow(a,b,operate,c);
						 document.getElementById("realtime").innerHTML = a + " " + "/" + " "  + b + " " + "=" + " " + c;
					}
					else {
						if(document.getElementById("lcm").checked) {
							 e = hcf(a,b);
							 c = a*b/e;
							 operate = "LCM";
							 addRow(a,b,operate,c);
							 document.getElementById("realtime").innerHTML = a + " " + " " + "lcm" + " " + " "  + b + " " + "=" + " " + c;
						}
						else {
							if(document.getElementById("hcf").checked) {
								  c = hcf(a,b);
								  operate = "HCF";
								   addRow(a,b,operate,c);
								   document.getElementById("realtime").innerHTML = a + " " + " " + "hcf" + " " + " "  + b + " " + "=" + " " + c;
							 }
								else {
								alert("Selectan an operator to get the result");
								}
							
							}	
						}		
					}			
		}		}				
			}
	
		
		};
		
		document.getElementById("but2").onclick = function(){
		var swap1 = document.getElementById("row1").value;
		var swap2 = document.getElementById("row2").value;
			if(document.getElementById("val1").value=="" || document.getElementById("val2").value=="")
			{alert("Perform some operations to make history...History is empty now !")}
			else{
			if(swap1=="" || swap2==""){
				alert("put row numbers to swap");
			}
			else{
				rowSwap(swap1,swap2);
			}
			}
		}
		
		addTable();
		
		
		
