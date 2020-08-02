

function geoExp(){
	var input = document.getElementById('geoExpInp').value
	var output = "E[x] = \\(\\frac{1}{p}\\)<br>E[x] = \\(\\frac{1}{"+input+"}\\)<br>E[x] = " + (1/parseInt(input)).toString();
	var el = document.getElementById("geoExpOut");
	el.innerHTML = output;
	MathJax.typesetPromise([el])
      	

	// MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
        }


function geoVar(){
	var input = document.getElementById('geoVarInp').value
	var output = "E[x] = \\(\\frac{1}{p}\\)<br>E[x] = \\(\\frac{1}{"+input+"}\\)<br>E[x] = " + (1/parseInt(input)).toString();
	var el = document.getElementById("geoVarOut");
	el.innerHTML = output;
	MathJax.typesetPromise([el])
      	

	// MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
        }