<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
<title>JavaScriptを呼んじゃおう☆</title>
<script src="<%= request.getContextPath() %>/js/calledTest.js">
</script>
<script src="<%= request.getContextPath() %>/js/calledTestByButton.js">
</script>
<script src="<%= request.getContextPath() %>/js/calledTestByLink.js">
</script>
</head>
<body>
<h1>色んな方法でJavaScriptを呼んでみよう！</h1>
<p>ボタンを押して呼んでみよう！</p>
<form action="">
<%-- <button id="CallJS" onclick="callByButton()">JavaScriptを呼ぶ</button> --%>
<input type="button" value="JavaScriptを呼ぶ" onclick="callByButton()">
</form>
<p>リンクを押して呼んでみよう！</p>
<form action="">
<%-- <button id="CallJS" onclick="callByButton()">JavaScriptを呼ぶ</button> --%>
<a href="javascript:void(0);" onclick="callByLink()">
	JavaScriptを呼ぶ
</a>
</form>
</body>
</html>