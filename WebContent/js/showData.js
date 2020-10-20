/*
function disp(url) {

	if(!window.opener || window.opener.closed){ // メインウィンドウの存在をチェック

		window.alert('メインウィンドウがありません'); // 存在しない場合は警告ダイアログを表示

	}
	else{

		window.opener.location.href = url; // 存在する場合はページを切りかえる

	}

}
*/

function showDataToSub() {
	
	//オープン元を参照して変数に代入する
	var num=window.opener.document.sample.suji.value;
	var str=window.opener.document.sample.moji.value;
	
	var name = document.getElementById("name");
	var blood = document.getElementById("blood");
	var pref = document.getElementById("pref");
	
	document.getElementById("name").value = name;
	document.getElementById("blood").value = blood;
	document.getElementById("pref").value = pref;
	
	
}
