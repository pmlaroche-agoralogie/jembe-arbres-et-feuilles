$(document).ready(function () {
	console.log("Hello World");
	display_choice();
});


function getCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function display_choice()
{console.log("dc");alert('disp choice');
	var pagename=getCookie("navigation");
	if(pagename==null)pagename="accueil";
	if(pagename=="accueil")display_home();
	if(pagename=="fplane")display_plane();

}
function click_choice(value)
{console.log("cc");

	alert('prechoice'+value+'"navigation='+value+'"');
	document.cookie='"navigation='+value+'"';
	var pagename=getCookie("navigation");
	alert('postchoice'+value);
	display_choice();
}

function display_home()
{ console.log("dh");alert('dh');
	var htmldiv = "";
	htmldiv += '<a href="javascript:" onclick="click_choice(\'fplane\')"><img src=/img/platanered.jpg></a>';
	htmldiv += "<img src=/img/sapinred.jpg>";
	$('#affiche_nav').html(htmldiv);

}


function display_plane()
{console.log("dp");alert('dp');
	var htmldiv = "";
	htmldiv += '<img src=/img/poirier.jpg>';
	htmldiv += "<img src=/img/acacia.jpg>";
	htmldiv += "<img src=/img/maron.jpg>";
	$('#affiche_nav').html(htmldiv);
	
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
 
