<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>お手軽タイマー</title>
<script src="<%= request.getContextPath() %>/js/timerCount.js"></script>
</head>
<body>
	<h1>タイマーだ…使ってみよう…</h1>
	<button id="timerOn" onclick="timerStart()">タイマー起動</button>
	<button id="timerOff" onclick="timerStop()">タイマー停止</button>
	<h2 id="timerCount">0秒</h2>
	<button id="reset" onclick="reset()">リセット</button>
	<br>
	<h1>そしてこれは…ウワサに絶えない金のなる木…！</h1>
	<button id="moneyOn" onclick="moneyStart()">金のなる木起動</button>
	<button id="moneyOff" onclick="moneyStop()">金のなる木停止</button>
	<h2 id="moneyCount">0円</h2>
	<button id="reset" onclick="moneyReset()">リセット</button>
	<br>
</body>
</html>