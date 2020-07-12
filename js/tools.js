
/* https://github.com/4weKromi */

/* Check github repo size */
function checkRepoSize(){
	var output;
	var urlFull = document.forms["repoForm"]["link"].value;
	var urlShort;
	if(urlFull.startsWith("http://")){
		urlShort = urlFull.slice(7);
		
	} else if (urlFull.startsWith("https://")){
		urlShort = urlFull.slice(8);
	} else {
		urlShort = document.forms["repoForm"]["link"].value;
	}
	var url_parts = urlShort.split('/');
	output=url_parts[2]+' size : <img alt=\"'+url_parts[2]+' repo size\" src=\"https://img.shields.io/github/repo-size/'+url_parts[1]+'/'+url_parts[2]+'\"/>';
	/*output+='<img alt=\"' + url_parts[2] + ' code size\" src=\"https://img.shields.io/github/languages/code-size/'+url_parts[1]+'/'+url_parts[2]+'" />';*/
	output+=' <br /><br /><a href=\"https://github.com/'+url_parts[1]+'/'+url_parts[2]+'/archive/master.zip\" > Download </a>';
	document.getElementById("result").innerHTML = output;
}

/* w3c validation of website */
function checkW3cValidation(){
	var output;
	var addr = document.forms["websiteForm"]["link"].value;
	output=addr+' : <img alt=\"W3C Validation\" src=\"https://img.shields.io/w3c-validation/html?targetUrl='+addr+'\" />';
	output+= '<br /><br /><a href=\"'+addr+'\" target=\"_blank\" > Open Link </a>';
	document.getElementById("result").innerHTML = output;
}
