

function buyButtonAble(cash, cost) {
	if (cash >= cost) {
		document.getElementById("buyAutoClick").disabled = "";
	} else {
		document.getElementById("buyAutoClick").disabled = "disabled";
	}
}