$(document).ready(function () {
	console.log("Hello World");

});



function getCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    alert(document.cookie);
    for(var i=0;i < ca.length;i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function display_choice()
{
	
	var pagename=getCookie("navigation");
	alert(pagename);
	if(pagename=="accueil")display_home();
}

function display_home()
{
	var htmldiv = "";
	htmldiv += "<img src=/img/platanered.jpg>";
	htmldiv += "<img src=/img/sapinred.jpg>";
	$('#affiche_nav').html(htmldiv);
	alert(htmldiv)
	
}
function test_ecriture() {
         document.getElementById("mytext").innerHTML = "Bonjour Timothe coucou";
    }
/*
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
*/
 /*   function videoRecorded(file) {
        i++;
        document.getElementById("myvid").innerHTML = "<video width='300' controls src='/jembedocs/" + file + "?i="+i+"'></video>";
    }
    
    function recordVideo() {
        jembe.camera.video.record({callback:videoRecorded, output:"myvid.mp4"});
    }
*/ 
 
