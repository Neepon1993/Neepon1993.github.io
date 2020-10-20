<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
<title>プロフィールの出力テスト</title>
<script src="<%= request.getContextPath() %>/js/inputReflect.js"></script>
</head>
<body>
	<h1>名前や生年月日を入力してね！</h1>
	<%-- <form action="" method="post" name="profile"> --%>
	名前：<input type="text" id="name" name="name"><br>
	年（西暦）：<input type="text" id="year" name="year"><br>
	月：<input type="text" id="month" name="month"><br>
	日：<input type="text" id="date" name="date"><br>
	<button onclick="outputProfile()">アラートで反映する</button>
	<%-- </form> --%>
	<h2 id="completeMessage"></h2>
</body>
</html>