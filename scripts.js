

function geoExp(){

	var input = document.getElementById('geoExpInp').value
	var output2 = "<p>E[x] = </p>$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$"+"<br><p>E[x] = 1/"+input+"<br>E[x] = " + (1/parseInt(input)).toString() + "</p>";
	var output = "$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$"
	var el = document.getElementById("geoExpOut");
	el.innerHTML = output;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
        }


function geoVar(){
	var input = document.getElementById('geoExpInp').value
	var output = "Var[x] = 1/p<br>E[x] = 1/"+input+"<br>Var[x] = " + (1/parseInt(input)).toString();

	document.getElementById("geoExpOut").innerHTML = output;
        }