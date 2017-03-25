function wait(ms) {
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

/* =========================== getting vol of cube individually ==================== */

document.getElementById("cal-cube").onclick = function() {
	var sideby = document.getElementById("side").value;
	var vs;
	vs = sideby*sideby*sideby;

	if( sideby=="" ) {
    	alert("enter the side of the cube")
    }
    else {	
     document.getElementById("vol-cube").innerHTML = "Volume" + " " + vs;
    }
 } 

/* =========================== getting vol of Sphere individually ==================== */


document.getElementById("cal-sphere").onclick = function() {
	var radiusby = document.getElementById("radius").value;
	var vr;
	var pie = Math.PI;
	vr = 4*pie*radiusby*radiusby*radiusby/3;

	if( radiusby=="" ) {
    	alert("Enter the radius of the Sphere")
    }
    else {	
     document.getElementById("vol-sphere").innerHTML = "Volume" + " " + vr;
    }
 }



document.getElementById("calculate").onclick = function() {
	var sideby = document.getElementById("side").value;
	var radiusby = document.getElementById("radius").value;
	
	var vr;
	var vs;
	vs = sideby*sideby*sideby;
	var pie = Math.PI;
	vr = 4*pie*radiusby*radiusby*radiusby/3;

    if(radiusby=="" || sideby=="" ) {
    	alert("enter the radius of the Sphere and the side of the Cube")
    }
    else {
	    document.getElementById("vofcube").innerHTML = "Volume of Cube" + " " + vs;
		document.getElementById("vofsphere").innerHTML = "Volume of Sphere" + " " + vr;

	    if(vs>vr) {
				alert("Vol of Cube is greater than Vol of Sphere");
	            }
	    else {
				alert("Volume of Sphere is greater than Vol of Cube");
	         }
	// ============== finding num is palindrome or not =======================  
	
	     var temp,rev=0
         var no=parseInt(vs)
         temp=no;
         while(no>0) {
             rev=(rev*10)+(no%10)
             no=Math.floor(no/10)
         }  
        if(rev==temp) {
            alert(temp +" Is Palindrome")
            document.getElementById("cube-val").style.backgroundColor = "#ff4a56";wait(1000);
	        document.getElementById("cube-val").style.color = "#222222";
	     }
       else {
            alert(temp + " Is Not Palindrome")
	    }
   }
}

