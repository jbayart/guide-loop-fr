var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();

client.get('https://api.github.com/repos/cyoung1024/Loop/commits/dev-spike', function(response) {
    var obj = JSON.parse(response); 
    var dateString = obj["commit"]["author"]["date"];
    var date = new Date(Date.parse(dateString));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    $(".dev-spike-fr").append(date.toLocaleDateString('fr-FR', options));
    $(".dev-spike-en").append(date.toLocaleDateString('en-EN', options));
    //$("<p> Dernière mise à jour dev-spike :" +  date.toLocaleDateString('fr-FR', options) + "</p>").appendTo(document.body);
	
});

client.get('https://api.github.com/repos/Loopkit/Loop/commits/dev', function(response) {
	var obj = JSON.parse(response); 
	var dateString = obj["commit"]["author"]["date"];
	var date = new Date(Date.parse(dateString));
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    minute:'2-digit'};
    $(".dev-fr").append(date.toLocaleDateString('fr-FR', options));
    $(".dev-en").append(date.toLocaleDateString('en-EN', options));
	//$("<p> Dernière mise à jour dev :" +  date.toLocaleDateString('fr-FR', options) + "</p>").appendTo(document.body);
});