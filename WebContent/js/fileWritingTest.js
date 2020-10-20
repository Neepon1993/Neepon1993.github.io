function fileWriting() {
	alert("ファイルを作成します。");
	var string = 'ダウンロードできたかな？';
	var title = 'testfile.txt';
	var blobType = 'text/plain';
 
	var linkTagId = 'getLocal';
	var linkTag = document.getElementById(linkTagId);
	var linkTagAttr =  ['href','download'];
 
	var msSave = window.navigator;
 
	var stringObject = new Blob([string], { type: blobType });
	var objectURL = window.URL.createObjectURL(stringObject);
 
	var UA = window.navigator.userAgent.toLowerCase();
	
	
	if(UA.indexOf('msie') != -1 || UA.indexOf('trident') != -1) {
		window.navigator.msSaveOrOpenBlob(stringObject, title); 
	} else {
		linkTag.setAttribute(linkTagAttr[0],objectURL);
		linkTag.setAttribute(linkTagAttr[1],title); 
	}
	
}

function writeToFile() {
	var fs = WScript.CreateObject("Scripting.FileSystemObject");
	alert("ファイルシステムを作成しました。");
	var file = fs.CreateTextFile("writingTest.txt");
	alert("テキストファイル作成処理を実施しました。");
	
	file.write("書き込みは成功しました。");
	alert("書き込みは成功しました。");
	
	file.close();
	
}

function fileWritingBotsu1() {
	if (window.File) {
	  // File APIに関する処理を記述
		window.alert("File APIが実装されてます。");
		alert("writeToFileの処理に入ります。");
		// writeToFile();
		
		var fs = WScript.CreateObject("Scripting.FileSystemObject");
		alert("ファイルシステムを作成しました。");
		var file = fs.CreateTextFile("writingTest.txt");
		alert("テキストファイル作成処理を実施しました。");
		
		file.write("書き込みは成功しました。");
		alert("書き込みは成功しました。");
		
		file.close();
	} else {
		window.alert("本ブラウザではFile APIが使えません");
	}
}