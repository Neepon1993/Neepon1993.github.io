var countSec = 0;

// タイマースタート
function timerStart()
{
	PassageID = setInterval('showTimer()',1000);
	document.getElementById("timerOn").disabled = true;
}

function timerStop()
{
	 clearInterval( PassageID );
	 document.getElementById("timerOn").disabled = false;
}

function showTimer()
{
	countSec++;
	var message = countSec + "秒";
	document.getElementById("timerCount").innerHTML = message;
}

function reset()
{
	countSec = 0;
	var message = countSec + "秒";
	document.getElementById("timerCount").innerHTML = message;
}

function moneyStart()
{
	PassageMoney = setInterval('moneyShow()',100);
	document.getElementById("moneyOn").disabled = true;
}

function moneyStop()
{
	 clearInterval( PassageMoney );
	 document.getElementById("moneyOn").disabled = false;
}

function moneyShow()
{
	countSec += 1;
	var message = countSec + "円";
	document.getElementById("moneyCount").innerHTML = message;
}

function moneyReset()
{
	countSec = 0;
	var message = countSec + "円";
	moneyStop();
	document.getElementById("moneyCount").innerHTML = message;
}
