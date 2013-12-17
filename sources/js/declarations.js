var essais = 0;
function nb_aleatoire(min, max)
{
        var nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
}
    
nb_correct = nb_aleatoire(1, 100);

function init()
{
        nb_correct = nb_aleatoire(1, 100);
        essais = 0;   
}

function printMsg(chaine)
{ 
        node = document.getElementById("texte");
        node.innerHTML ="Le nombre &agrave deviner est "+chaine;
}

function printMsg(chaine)
{ 
        node = document.getElementById("texte");
        node.innerHTML ="Le nombre &agrave deviner est "+chaine;
}

function controle()
		{
			nombre_choisi = document.form1.input.value;
		}

function clic()
	{
		controle();			
		essais++
		if (nombre_choisi < nb_correct)
			printMsg(" plus grand.");
		if (nombre_choisi > nb_correct)
			printMsg(" plus petit.");
		if (nombre_choisi == nb_correct) { essais--
			printMsg(nb_correct + ". Bravo !\nTu as devin&eacute; en " + essais + " coups.");
			init();
		}
	}
