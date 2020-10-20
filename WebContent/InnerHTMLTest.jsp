<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
<script src="<%= request.getContextPath() %>/js/overwrite.js"></script>
<title>画面書き換えテスト</title>
</head>
<body>
	<h1>ボタンを押して、書き換えて！</h1>
	<button id="write" onclick="chengeWriting()">書き換える</button>
	<p id="war">戦争じゃ～！！</p>
</body>
</html>