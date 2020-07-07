function readJsonFile(page=0){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "data/repo.json", true);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState == 4){
            if(rawFile.status === 200 || rawFile.status === 0){
                var buffer = JSON.parse(rawFile.responseText);
				if(page === 1){
					jsonDataIndex(buffer);
				} else if(page === 2){
					jsonDataAbout(buffer);
				}
            }
        }
    }
    rawFile.send(null);
}

/* Index page */
function jsonDataIndex(data) {
    var output = '<ul class=\"xbox\">';
    var i;
    for(i = 0; i < data.length; i++) {
        if(data[i].display==1)
            output +='<li><a href=\"' + data[i].repolink + '\" target=\"_blank\" />' + data[i].reponame + '</a></li>';
    }
	output +='</ul>';
    document.getElementById("repo").innerHTML = output;
}

/* About page */
function jsonDataAbout(data) {
    var output = '<table padding=\"30px\" >';
    var i;
    for(i = 0; i < data.length; i++) {
        if(data[i].display==1)
            output +='<tr><td><a href=\"' + data[i].repolink + '\" target=\"_blank\" />' + data[i].reponame + '</a></td><td><img alt=\"' + data[i].reponame + ' code size\" src=\"' + data[i].imgCodeSize + '" /></td><td><img alt=\"' + data[i].reponame + ' repo size\" src=\"' + data[i].imgRepoSize + '" /></td></tr>';
    }
	output +='</table>';
    document.getElementById("repo-details").innerHTML = output;
}
