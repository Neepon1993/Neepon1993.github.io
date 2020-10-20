countValue = 0;

function countUp()
{
	countValue += 1;
	document.getElementById("hee_count").innerHTML = countValue;
}

function countDown()
{
	countValue -= 1;
	document.getElementById("hee_count").innerHTML = countValue;
}

function reset()
{
	countValue = 0; 
	document.getElementById("hee_count").innerHTML = countValue;
}

