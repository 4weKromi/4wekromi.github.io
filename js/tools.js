
/* https://github.com/4weKromi */

/* Check github repo size */
function checkRepoSize(){
	var output;
	var username = document.forms["repoForm"]["user"].value;
	var reponame = document.forms["repoForm"]["repo"].value;
	output=reponame+' size : <img alt=\"GitHub repo size\" src=\"https://img.shields.io/github/repo-size/'+username+'/'+reponame+'\"/>';
	output+=' <br /><br /><a href=\"https://github.com/'+username+'/'+reponame+'\" target=\"_blank\" > Open Link </a>';
	document.getElementById("result").innerHTML = output;
}

/* Check github repo size */
function checkW3cValidation(){
	//<img alt="W3C Validation" src="https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2F4wekromi.github.io%2F">
	var output;
	var addr = document.forms["websiteForm"]["link"].value;
	output=addr+' : <img alt=\"W3C Validation\" src=\"https://img.shields.io/w3c-validation/html?targetUrl='+addr+'\" />';
	output+= '<br /><br /><a href=\"'+addr+'\" target=\"_blank\" > Open Link </a>';
	document.getElementById("result").innerHTML = output;
}
