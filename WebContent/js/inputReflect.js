function outputProfile() 
{
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var date = document.getElementById("date").value;
	var errorMessage = "";
	
	// エラーメッセージ一覧
	var noName = "名前が入力されていません！"
	var noYear = "\n西暦が入力されていません！";
	var noMonth = "\n月が入力されていません！";
	var noExistMonth = "\n入力された月は存在しません！";
	var noDate = "\n日が入力されていません！";
	var noExistDate = "\n入力された日は存在しません！";
	
	if (name == "") {
		errorMessage += noName;
	}
	
	if (year == "") {
		errorMessage += noYear;
	}
	
	if (month == "") {
		errorMessage += noMonth;
	} else if (month < 1 || month > 12) {
		errorMessage += noExistMonth;
	}
	
	if (date == "") {
		errorMessage += noDate;
	} else if (date < 1 || date > 31) {
		errorMessage += noExistDate;
	} 
	
	
	if (errorMessage != "") {
		alert(errorMessage);
	} else {
		var completeMessage = document.getElementById("completeMessage");
		var completeMessage = name + "さんこんにちは！\n生年月日は" + year + "年" + month + "月" + date + "日ですね！";
		alert(completeMessage);
		completeMessage.innerHTML = completeMessage;
	}
}