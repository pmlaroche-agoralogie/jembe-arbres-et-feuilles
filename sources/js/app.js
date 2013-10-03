$(document).ready(function () {
	console.log("Hello World");
	try_geoloc()
});


function test_ecriture() {
         document.getElementById("mytext").innerHTML = "Ceci est un test";
    }

function try_geoloc() {
	
	 jembe.geoloc.getCurrentPosition({
            onSuccess: function(position) {
 
                infoposLat = position.coords.latitude;
                infoposLong = position.coords.longitude;
                jembe.alert.show({
                            message:'pos: ' + infoposLat + ", " + infoposLong,
                            buttons:'Oui',
                            });
		
                document.getElementById('geoloc_msg').innerHTML='pos: ' + infoposLat + ", " + infoposLong;
             }, onError: function (error) { 
                document.getElementById('geoloc_msg').innerHTML=error.message;
                if (error.code==2) alert('Votre position ne peut etre determinee');
            }
        });
        
	
}

 /*   function videoRecorded(file) {
        i++;
        document.getElementById("myvid").innerHTML = "<video width='300' controls src='/jembedocs/" + file + "?i="+i+"'></video>";
    }
    
    function recordVideo() {
        jembe.camera.video.record({callback:videoRecorded, output:"myvid.mp4"});
    }
*/ 
 