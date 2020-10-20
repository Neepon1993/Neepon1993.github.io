<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>お手軽へぇボタン</title>
<script src="<%= request.getContextPath() %>/js/heeCount.js"></script>
</head>
<body>
	<h1>へぇボタンだ…押してみよう…</h1>
	<button id="hee_button" onclick="countUp()">へぇボタン</button>
	<button id="hee_button" onclick="countDown()">逆へぇボタン</button>
	<h2 id="hee_count">0</h2>
	<button id="reset" onclick="reset()">リセット</button>
</body>
</html>