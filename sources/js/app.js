$(document).ready(function () {
	console.log("Hello World");
});


function test_ecriture() {
         document.getElementById("mytext").innerHTML = "Ceci est un test";
    }

function try_geoloc() {
	
	 jembe.geoloc.getCurrentPosition({
            onSuccess: function(position) {
 
                infoposLat = position.coords.latitude;
            
                infoposLong = position.coords.longitude;
                /*jembe.alert.show({
                            message:'pos: ' + infoposLat + ", " + infoposLong,
                            buttons:'Oui',
                            });
		*/
                document.getElementById('geoloc_msg').innerHTML='pos: ' + infoposLat + ", " + infoposLong;
             }, onError: function (error) { 
                document.getElementById('geoloc_msg').innerHTML=error.message;
                //if (error.code==2) alert('Votre position ne peut etre determinee');
            }
        });
        
	
}